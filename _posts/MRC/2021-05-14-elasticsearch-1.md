---
title: Elasticsearch-1
layout: post
author: skaurl
categories:
- MRC
image: assets/images/ElasticSearch-logo.png
---

# Elasticsearch-1
## Abstract

챗봇에서 질문이 들어왔을 때, 그에 대응하는 적절한 문서를 찾아줄 필요가 있습니다. 이때, 검색 엔진 오픈 소스인 Elasticsearch를 사용해서 Retrieval를 구현하려고 합니다. 여기서는 Back-End에 해당하는 내용보다는 Elasticsearch의 검색 성능을 올리기 위한 내용을 다루려고 합니다.

## Setting

해당 내용은 서버상에 Elasticsearch가 설치되어 있다는 가정하에 작성되었습니다.

```
!pip install elasticsearch
elasticsearch-7.12.1/bin/elasticsearch-plugin install analysis-nori # 한국어 토크나이저 설치
```
Elasticsearch를 파이썬에서 사용하기 위한 라이브러리 설치합니다. 그리고 처음에는 Elasticsearch에 한국어 토크나이저가 설치되어 있지 않습니다. 따라서, 저희가 따로 설치해줄 필요가 있습니다.

```
from elasticsearch import Elasticsearch
es = Elasticsearch('localhost:9200')
print(es.info())
```
이제 파이썬에 Elasticsearch를 연결합니다. 세팅에 따라 다르겠지만, 개인 컴퓨터에서 사용한다면 'localhost:9200'로 연결해주시면 됩니다. 그리고 마지막의 print문이 정상적으로 출력이 되면, Elasticsearch가 정상적으로 연결된 것입니다.

```
es.indices.create(index = 'document',
                  body = {
                      'settings':{
                          'analysis':{
                              'analyzer':{
                                  'my_analyzer':{
                                      "type": "custom",
                                      'tokenizer':'nori_tokenizer',
                                      'decompound_mode':'mixed',
                                      'stopwords':'_korean_',
                                      'synonyms':'_korean_',
                                      "filter": ["lowercase",
                                                 "my_shingle_f",
                                                 "nori_readingform",
                                                 "nori_number",
                                                 "cjk_bigram",
                                                 "decimal_digit",
                                                 "stemmer",
                                                 "trim"]
                                  }
                              },
                              'filter':{
                                  'my_shingle_f':{
                                      "type": "shingle"
                                  }
                              }
                          },
                          'similarity':{
                              'my_similarity':{
                                  'type':'BM25',
                              }
                          }
                      },
                      'mappings':{
                          'properties':{
                              'title':{
                                  'type':'text',
                                  'analyzer':'my_analyzer',
                                  'similarity':'my_similarity'
                              },
                              'text':{
                                  'type':'text',
                                  'analyzer':'my_analyzer',
                                  'similarity':'my_similarity'
                              }
                          }
                      }
                  }
                  )
print(es.indices.get('document'))
```
Elasticsearch에 문서를 저장할 index를 생성합니다. index는 크게 settings과 mappings로 나뉩니다. settings에는 사용한 기능들을 준비하고 mappings에는 데이터 양식을 준비합니다. 그리고 마지막의 print문이 정상적으로 출력이 되면, index 생성이 완료된 것입니다.

```
import os

for file_name in os.listdir('/Users/kimnamhyeok/PycharmProjects/pythonProject/club'):
    if file_name != '.DS_Store':
        with open('/Users/kimnamhyeok/PycharmProjects/pythonProject/club/'+file_name, 'r') as f:
            contents = f.read()
        es.index(index='document', body = {"title" : file_name.split('.')[0], "text" : contents})

for file_name in os.listdir('/Users/kimnamhyeok/PycharmProjects/pythonProject/player'):
    if file_name != '.DS_Store':
        with open('/Users/kimnamhyeok/PycharmProjects/pythonProject/player/'+file_name, 'r') as f:
            contents = f.read()
        es.index(index='document', body = {"title" : file_name.split('.')[0], "text" : contents})

```
Elasticsearch에 팀 문서와 선수 문서를 저장합니다. bulk 단위로 한 번에 넣는 방법도 있으나, 익숙하지 않은 관계로 정확하게 하기 위해 문서 하나씩 넣어주었습니다.

```
question = input()

query = {
    'query': {
        'bool': {
            'should': [
                {'match': {'title': question}},
                {'match': {'text': question}}
            ]
        }
    }
}

doc = es.search(index='document',body=query,size=10)['hits']['hits']

print(doc[0])
```
이제 세팅을 마치고 정상적으로 검색이 되는지 확인할 차례입니다. question을 통해서 정상적으로 검색이 되면, Elasticsearch 세팅이 완료된 것입니다.

# 끝으로

Elasticsearch에 대한 기본적인 세팅을 마쳤습니다. 예상되는 질문에는 선수명이나 팀명과 같은 고유명사가 사용될 가능성이 높기 때문에, Elasticsearch를 기반으로 하면 Retrieval에서 좋은 성능을 낼 수 있다고 생각합니다. 다음에는 [자바카페 Elasticsearch 플러그인](https://github.com/javacafe-project/elasticsearch-plugin) 기능을 추가해보려고 합니다.
