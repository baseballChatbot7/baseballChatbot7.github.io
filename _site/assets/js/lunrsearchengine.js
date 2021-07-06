
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Introduce ourselves",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Baseball Chat. We will reply as soon as possible!   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               meeting_log_2021. 06. 26              :       2021. 06. 12 회의록 김남혁님 NER, MRC 경량화 MRC 학습만 다시 하면 좋을 듯하다. –&gt; 야구 데이터를 가지고 학습을 해야할 것 같다 전체적인 파이프라인 정리해놓음 -&gt; NER 추가해주면 될꺼 같다. 사람이 쓸정도로. . . :                                                                               skaurl                 26 Jun 2021                                                                                                                           meeting_log_2021. 06. 12              :       2021. 06. 12 회의록 김남혁 님: 네트워킹 데이랑 하는 작업이 조금 겹친다. 플라스크 서빙 단계에서, 전처리 후처리를 작업하고 있다. 후처리는 조사 제거 전처리는 서치 오탈자, dudxkcjfl -&gt; 영타처리도 작업하고 있음(지금은 두 쿼리를. . . :                                                                               skaurl                 12 Jun 2021                                                                                                                           카카오 봇을 만들어 보자              :       카카오 봇을 만들어 보자:                                                                               happyBeagle                 01 Jun 2021                                                                                                                           meeting_log_2021. 05. 29              :       2021. 05. 29 회의록 김남혁 님: 엘라스틱 서치 맞춤법, 한글-&gt;영어 기능 등을 구현해놨다. 자동완성 기능은 뺐다. 모델 받아서 인퍼런스 파일 드린 상태다. mrc는 성능이슈, ner는 용량이슈 -&gt; 둘다 최적화 필요 야구 문서는. . . :                                                                               skaurl                 29 May 2021                                                                                                                           meeting_log_2021. 05. 22              :       2021. 05. 22 회의록 김남혁 님 :     회의록 날짜 추가 어떻게 하나요?   블로그에 글… 써주세요…   오탈자 수정하는 엘라스틱 서치는 꼭 사용하고 싶다.    나무위키 문서 정리 하고 있다.    :                                                                               skaurl                 22 May 2021                                                                                                                           meeting_log_2021. 05. 15              :       2021. 05. 15 회의록 김남혁 님: 엘라스틱 서치는 세팅한 대로 쓰시면 될 것 같습니다. 책으로 공부하면서 알게된 기능이 하나 있습니다. 7. 0. 0버전을 사용하면 유용한 플러그인을 달 수 있을 것 같다. inference 속도는 크게. . . :                                                                               skaurl                 15 May 2021                                   &laquo;        1        2        3       &raquo; "
    }, {
    "id": 5,
    "url": "http://localhost:4000/meeting_log/",
    "title": "meeting_log",
    "body": "April:  2021/04/10 2021/04/17 2021/04/24May:  2021/05/01"
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "http://localhost:4000/page3/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "http://localhost:4000/meeting-log-20210626/",
    "title": "meeting_log_2021.06.26",
    "body": "2021/06/26 - 2021. 06. 12 회의록 김남혁님     NER, MRC 경량화   MRC 학습만 다시 하면 좋을 듯하다. –&gt; 야구 데이터를 가지고 학습을 해야할 것 같다   전체적인 파이프라인 정리해놓음 -&gt; NER 추가해주면 될꺼 같다.    사람이 쓸정도로 만드려면 시간이 오래 걸릴꺼같다.    실시간 데이터 고민해야한다.    앞으로 2주 정도…카카오 톡에서 돌아가게 하면 좋을것같은데   살아 있는 동안 우리 서버에서 해도 되고 GCP를 써서 해도 될듯하다.     할 일     김남혁님         파이프 라인에 영재님 NER추가 해서 백엔드에 주기     나무위키 데이터 문서 수를 줄이는 것          종빈님 &amp; 서일님         야구 전용 MRC데이터 생성     convolution을 빼고 학습할 예정          민정님 &amp; 병민님         카카오 답변 지연에 대한 이슈를 정리          "
    }, {
    "id": 10,
    "url": "http://localhost:4000/meeting-log-20210612/",
    "title": "meeting_log_2021.06.12",
    "body": "2021/06/12 - 2021. 06. 12 회의록 김남혁 님: 네트워킹 데이랑 하는 작업이 조금 겹친다.      플라스크 서빙 단계에서, 전처리 후처리를 작업하고 있다.    후처리는 조사 제거   전처리는 서치 오탈자, dudxkcjfl -&gt; 영타처리도 작업하고 있음(지금은 두 쿼리를 그냥 날려버리는 걸로)   로그 파일 기록도 가능하면 좋을 것 같습니다.     우종빈 님:     onnx로 추론 속도를 빠르게 만들고 있다.     유영재 님:     룰 베이스 제작 중이다.    ner 엘렉트라 스몰로 학습하고 있다. 성능은 잘 나오고 있고, 오늘 공유할 예정이다.    김남혁 님: 포스팅 부탁드립니다.     조민정,최병민 님:     코드 모듈화 중이다.    입력/출력 지연에 대한 대응을 더 구체화 시키고 있다.    데드라인이 바뀌면 제공되는 서버를 사용하기 어렵기 때문에, 미리 옮길 서버를 생각해야할 것 같다.          GCP 대비 중          "
    }, {
    "id": 11,
    "url": "http://localhost:4000/lets_make_kakaobot/",
    "title": "카카오 봇을 만들어 보자",
    "body": "2021/06/01 - 카카오 봇을 만들어 보자준비물:  카카오 봇과 통신할 서버 FLASK1. 서버 구축하기: 우선, 해당 프로젝트에서 서버는 FLASK로 구성되어 있다. 그렇다면 서버는 어디에 구축해야할까? 나는 우선 AWS에 서버를 구축하고자 하였다. @aws 서버 구축  AWS의 프리티어 지원을 해주는 인스턴스를 선택하여 서버를 구성하였습니다.  자, 그럼 이제 FLASK를 서버에 설치해줄까요? 참고 블로그  이렇게 FLASK가 설치된 것을 확인할 수 있다.  그렇다면 이제 서버를 돌려보도록 하자 &gt;&lt;2. 서버 구성하기: 우선 Toy Code를 만들어 서버를 열고 확인해보자. from flask import Flask, request, jsonifyapp = Flask(__name__)@app. route('/keyboard')def Keyboard():  dataSend = {  }  return jsonify(dataSend)if __name__ ==  __main__ :  app. run(host = '0. 0. 0. 0', port = 5000)위의 코드를 돌리고 서버의 url:5000/에 접속해보자. 잘 실행되는 것을 확인 할 수 있다. 자, 그렁다면 이제 카카오 챗봇과 서버를 연결해줘야한다. 3. 챗봇 연결하기: 1. 챗봇 만들기: @카카오 채널 관리자 센터 위의 url을 통해 카카오 채널을 만들어 주자. 여기서 주의해야하는 것은 ** 대시보드 &gt; 프로필 설정 &gt; 채널 공개**를 허용해야한다.  자, 그렇다면 카카오 오픈빌더를 통해 챗봇을 생성하여 생성된 오픈채널과 연결해주어야한다. 그러면 카카오 오픈빌더에서 챗봇을 만들어 보자. @카카오 채널 챗봇 만들기 해당 페이지를 들어가면 아래와 같이 선택지가 뜨는데 여기서 카카오톡 채널 챗봇 만들기를 선택해줘야한다.  여기서 신청서를 조금 자세하게 적으면 승인이 될것이다 (대충 썼다가 한번 반려당했다 + 위의 카카오톡 채널공개 안했다가 한번더 반려당했다. ) 2. 서버와 챗봇 연결하기: 우선 앞서 만들어놓은 server. py code에 아래의 method를 추가해주자. @app. route('/message', methods=['POST'])def Message():  content = request. get_json()  text = content['userRequest']['utterance']. strip()  print(text)  if text ==  hello :    dataSend = {         version :  2. 0 ,         template : {           outputs : [            {               simpleText : {                 text :  안녕 함 :)               }            }          ]        }      }  else:    dataSend = {         version :  2. 0 ,         template : {           outputs : [            {               simpleText : {                 text :  안녕 못함 :)               }            }          ]        }      }  return jsonify(dataSend) url:port/message의 경로에 카카오 챗봇이 보내는 형식대로 데이터를 보내면 조건에 따라 “안녕 함:)”, “안녕 못함 :)”을 보내는 함수이다.  이를 적용시키고 다시 실행시켜보자.  그리고 승인된 챗봇관리 페이지에서 스킬 메뉴에 들어가서 생성을 눌러 새로운 스킬을 생성하도록하자.   위의 url에 url:port/message를 넣어주면 위의 함수의 조건 즉, hello라고 물어본것이 아니면 모두 “안녕 못함 :)”이라고 답변하는 함수가 작동이 된다. Next Time…. :  다음 시간에는 의도치않게 inference 시간이 오래걸려 답변을 하지 못하는 일이 생길 수 있다.  해당 경우, 어떻게 대처할지 알아보자. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/meeting-log-20210529/",
    "title": "meeting_log_2021.05.29",
    "body": "2021/05/29 - 2021. 05. 29 회의록 김남혁 님:     엘라스틱 서치 맞춤법, 한글-&gt;영어 기능 등을 구현해놨다.    자동완성 기능은 뺐다.    모델 받아서 인퍼런스 파일 드린 상태다.    mrc는 성능이슈, ner는 용량이슈 -&gt; 둘다 최적화 필요   야구 문서는 3만건으로 줄였는데, 1/4만 야구문서인 것 같다.          1000자 단위로 자르면 30만건이라 리트리버 속도가 걱정된다.           특정 score 이하인 경우는 재끼기 (리트리버, MRC)         테스트 해보니 괜찮았다.      다시 한번 질문해주세요 이런걸로 해주는게 좋을 것 같다.            우종빈 님:     헤이스택 보고있고, 이쪽에서도 0. 9스코어 미만이면 검색 결과 리턴을 하지 않는다.    기본적인 MRC의 구조를 바꾸고 있다. 아직까지 성능향상이 없다.    서일 님 데이터를 썼는데, 그 데이터가 신통치 않은 것 같다.          질문이 단순하고 오류가 많아서 성능 저하가 심하다.      실없는 질문을 많이 한다.      아예 빼버리거나? 아니면 조금 더 수치적인 질문을 유도하는게 좋을 것 같다.           서일 님 :         해당 이슈는 지난번 대회에도 있었다.      아마 실없는 질문과 쉬운 질문이 많아서 그랫던 것 같다.      그래서 해당 방법은 성능을 위한 방법 보다는 이러한 방법을 사용했다는 식으로 어필을 하려고 했던 것이었다.      수치에 해당하는 질문을 많이 생성하도록 해보겠다.           KBOBERT 언어 모델을 그렇게 학습시키는 더 맞지 않을까 생각함.     유영재 님:     경량화 부분은 그쪽 지식이 없어서 공부를 해보고 있다.    룰베이스 쪽을 진행하고 있다.          크롤링 작업을 진행하고 있다.      야구 전문용어.            백엔드 팀(조민정 님, 최병민 님):     오늘 테스트 해봤다.          top10 : 추론시간에 10초나 걸림     검색할 문서 ner로 미친듯이 줄이거나 해야겠다.           스코어 기준치 임계점을 파악해야하는데   할일  김남혁 님: MRC 리트리버 성능 향상(스코어 관련), 후처리 서일 님: 데이터 생성 우종빈 님: 경량화/모델 학습 유영재 님: 룰베이스/경량화 백엔드님팀: 파이프라인 구축"
    }, {
    "id": 13,
    "url": "http://localhost:4000/meeting-log-20210522/",
    "title": "meeting_log_2021.05.22",
    "body": "2021/05/22 - 2021. 05. 22 회의록 김남혁 님 :     회의록 날짜 추가 어떻게 하나요?   블로그에 글… 써주세요…   오탈자 수정하는 엘라스틱 서치는 꼭 사용하고 싶다.    나무위키 문서 정리 하고 있다.     서일 님 :     MRC 용 야구 전용 데이터를 만들어 줄 수 있다.    그리고 koelectra small 모델을 사용하면 훨씬 가벼운 모델을 만들어 줄 수 있다.    bm25관련해서 pickle 파일로 만들 계획이다.     우종빈 님 :     저번에 만들었던 것이 문제가 있어서 다시 만들고 있다.    나무위키 데이터 크롤링을 할 때 time. sleep(1)로 하니까 블락을 당하지 않았다.    알고리즘을 조금 바꾸니까 순도 높은 데이터만을 수집할 수 있었다.    류현진 같은 유명 선수들은 하이퍼 링크가 너무 많다. (여러 문서로 나뉘어져 있다. )   하이퍼링크를 두번까지만 탈 수 있도록 해놓았다.    후처리는 룰베이스로 진행했다.    이후에는 koelectra small로 mrc 개발을 할 계획이며   2주 뒤를 데드라인으로 생각하고 작업을 진행 예정.     유영재 님 :     음절단위 NER: 생각보다 잘 뽑아준다!! 외국인 선수 이름도   후처리 작업이 필요하다.          태그 붙여서 나오는 단어 처리가 필요할 것 같다.      김남혁 님: 레포에 정리해주세요.           이후에는 룰베이스 기반으로 아웃라이어 쪽으로 해결할 계획이다.     조민정 님 :     서버를 옮겨야 할 것 같다.    어디까지??? 헤로코 서버 에서 올리는게 좋을지?         저번에 마스크 서비스 올린 것     heroku 여기를 기반으로 해보면 될 것 같다.           일단은 네이버에서 제공하는 서버를 활용할 계획.    "
    }, {
    "id": 14,
    "url": "http://localhost:4000/meeting-log-20210515/",
    "title": "meeting_log_2021.05.15",
    "body": "2021/05/15 - 2021. 05. 15 회의록 김남혁 님:     엘라스틱 서치는 세팅한 대로 쓰시면 될 것 같습니다.          책으로 공부하면서 알게된 기능이 하나 있습니다.      7. 0. 0버전을 사용하면 유용한 플러그인을 달 수 있을 것 같다.           inference 속도는 크게 신경을 안써도 될 것 같다.     서일 님:     오늘 밤을 새서라도 드리겠다고 말씀을 드렸는데, 내일 밤을 새서라도 말씀을 드리겠다.    https://huggingface. co/monologg/koelectra-small-v3-discriminator/tree/main 모델을 해보면 될 것 같다.          https://huggingface. co/monologg/distilkobert/tree/main 이거보다도 가볍다          내일 아침 6시까지 만들어 보겠습니다.     유영재 님:     NER을 음절 단위로 잘라서 학습을 해보는데, 코랩에서 학습을 해보니까 엄청나게 오래 걸리더라.    그래서 로컬에서 테스트를 해보고 있다.    아직 보여드릴 건 없는 상황이다.    남혁 님:         질문이 고유명사를 포함하는 경우, 그걸 활용하여 문서를 더 잘 가져올 수 있을 것 같다.            백엔드 팀(조민정 님, 최병민 님)     병민 님 : 엘라스틱 서치를 서버에 올려서 테스트를 해보고 있다.    민정 님 : 남혁 님의 경우를 보면 inference의 속도가 큰 영향이 없을 거 같은데,         네트워크 상태를 고려한 지연 답변 대처를 위한 프로세스 구축 중     메모리 이슈가 있다.           엘라스틱 서치를 지원해주는 서버를 사용하거나,    다음 주까지 할 일     김남혁 님 : 엘라스틱 서치 javacafe 설치   서일 님 : 야구 전용 QA 모델 작성하기   우종빈 님 : 위키 데이터 한번 더 검토하기   유영재 님 : NER   조민정 님 : 지연과 서버문제에 대해서 해결할 예정   최병민 님 : 엘라스틱 서치 세팅   "
    }, {
    "id": 15,
    "url": "http://localhost:4000/elasticsearch-1/",
    "title": "Elasticsearch-1",
    "body": "2021/05/14 - Elasticsearch-1Abstract: 챗봇에서 질문이 들어왔을 때, 그에 대응하는 적절한 문서를 찾아줄 필요가 있습니다. 이때, 검색 엔진 오픈 소스인 Elasticsearch를 사용해서 Retrieval를 구현하려고 합니다. 여기서는 Back-End에 해당하는 내용보다는 Elasticsearch의 검색 성능을 올리기 위한 내용을 다루려고 합니다. Setting: 해당 내용은 서버상에 Elasticsearch가 설치되어 있다는 가정하에 작성되었습니다. !pip install elasticsearchelasticsearch-7. 12. 1/bin/elasticsearch-plugin install analysis-nori # 한국어 토크나이저 설치Elasticsearch를 파이썬에서 사용하기 위한 라이브러리 설치합니다. 그리고 처음에는 Elasticsearch에 한국어 토크나이저가 설치되어 있지 않습니다. 따라서, 저희가 따로 설치해줄 필요가 있습니다. from elasticsearch import Elasticsearches = Elasticsearch('localhost:9200')print(es. info())이제 파이썬에 Elasticsearch를 연결합니다. 세팅에 따라 다르겠지만, 개인 컴퓨터에서 사용한다면 ‘localhost:9200’로 연결해주시면 됩니다. 그리고 마지막의 print문이 정상적으로 출력이 되면, Elasticsearch가 정상적으로 연결된 것입니다. es. indices. create(index = 'document',         body = {           'settings':{             'analysis':{               'analyzer':{                 'my_analyzer':{                    type :  custom ,                   'tokenizer':'nori_tokenizer',                   'decompound_mode':'mixed',                   'stopwords':'_korean_',                   'synonyms':'_korean_',                    filter : [ lowercase ,                          my_shingle_f ,                          nori_readingform ,                          nori_number ,                          cjk_bigram ,                          decimal_digit ,                          stemmer ,                          trim ]                 }               },               'filter':{                 'my_shingle_f':{                    type :  shingle                  }               }             },             'similarity':{               'my_similarity':{                 'type':'BM25',               }             }           },           'mappings':{             'properties':{               'title':{                 'type':'text',                 'analyzer':'my_analyzer',                 'similarity':'my_similarity'               },               'text':{                 'type':'text',                 'analyzer':'my_analyzer',                 'similarity':'my_similarity'               }             }           }         }         )print(es. indices. get('document'))Elasticsearch에 문서를 저장할 index를 생성합니다. index는 크게 settings과 mappings로 나뉩니다. settings에는 사용한 기능들을 준비하고 mappings에는 데이터 양식을 준비합니다. 그리고 마지막의 print문이 정상적으로 출력이 되면, index 생성이 완료된 것입니다. import osfor file_name in os. listdir('/Users/kimnamhyeok/PycharmProjects/pythonProject/club'):  if file_name != '. DS_Store':    with open('/Users/kimnamhyeok/PycharmProjects/pythonProject/club/'+file_name, 'r') as f:      contents = f. read()    es. index(index='document', body = { title  : file_name. split('. ')[0],  text  : contents})for file_name in os. listdir('/Users/kimnamhyeok/PycharmProjects/pythonProject/player'):  if file_name != '. DS_Store':    with open('/Users/kimnamhyeok/PycharmProjects/pythonProject/player/'+file_name, 'r') as f:      contents = f. read()    es. index(index='document', body = { title  : file_name. split('. ')[0],  text  : contents})Elasticsearch에 팀 문서와 선수 문서를 저장합니다. bulk 단위로 한 번에 넣는 방법도 있으나, 익숙하지 않은 관계로 정확하게 하기 위해 문서 하나씩 넣어주었습니다. question = input()query = {  'query': {    'bool': {      'should': [        {'match': {'title': question}},        {'match': {'text': question}}      ]    }  }}doc = es. search(index='document',body=query,size=10)['hits']['hits']print(doc[0])이제 세팅을 마치고 정상적으로 검색이 되는지 확인할 차례입니다. question을 통해서 정상적으로 검색이 되면, Elasticsearch 세팅이 완료된 것입니다. 끝으로Elasticsearch에 대한 기본적인 세팅을 마쳤습니다. 예상되는 질문에는 선수명이나 팀명과 같은 고유명사가 사용될 가능성이 높기 때문에, Elasticsearch를 기반으로 하면 Retrieval에서 좋은 성능을 낼 수 있다고 생각합니다. 다음에는 자바카페 Elasticsearch 플러그인 기능을 추가해보려고 합니다. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/meeting-log-20210508/",
    "title": "meeting_log_2021.05.08",
    "body": "2021/05/08 - 2021. 05. 08 회의록 김남혁 님 :     일주일에 하나씩 글 써주세요!   실험 일지 같은 느낌으로, 꾸준히 쓰면 좋을 것 같다. 형식 구애X   미뤄놨던 포스팅 다 함.    일반뉴스 + 야구 데이터로 BERT 학습-&gt; 야구를 못맞춘다.          야구 관련한 데이터를 더 많이 확보하여 그 데이터로 학습을 하고 있다.           MRC쪽 수정하는 중         엘라스틱 서치를 시험하는 중이다.      백엔드에서 엘라스틱을 올려주시면, 추가적인 파라미터 실험이나 안쪽 모델 실험은 제가 진행할 수 있을 것 같다.              서일 님 : 데이터 전처리 4페이지 째 수작업으로 하고 있습니다.   우종빈 님 :     mrc 작업하고 있음   retrieval 쪽 작업도 병행하고 있다.     유영재 님 :     지난 주에서 추가로 테스트를 많이 해보지는 않았는데, 테스트 에러가 있어서 이에 대해서 말해보려고 한다.    심플한 문제, 이름이나 구단명뒤의 조사처리 문제가 있었다. 음절 단위의 개체명 분석이 나을지 형태소가 나을지         서일 님: https://kakaobrain. github. io/pororo/seq2seq/wsd. html 이거 추천합미다.            조민정 님 :     현재 승인받은 유일한 사람입니다.    따라서 혼자서 실험을 해보고 있다.     최병민 님 :     서버로 가져가기, 전처리 하고 있다.    계층을 어떻게 구조를 만들어야 할까?   엘라스틱 구현할 예정입니다.    정리 성능 빼고는 MRC 구현은 어느정도 되었다.      백엔드 팀: 엘라스틱 서치 사용법 전달 받아 붙여두기   MRC 팀: MRC 임시 모델을 만들어서 벡엔드 팀에 전달할 것         코쿼드1. 0 으로 임시모델 가볍게 만들어 드리기: py 파일     가볍게, 배치 사이즈 1 모델     입력은 그냥 터미널에서 문서랑 쿼리 때려넣어주기          "
    }, {
    "id": 17,
    "url": "http://localhost:4000/meeting_log/2021_05_01",
    "title": "meeting_log_2021.05.01",
    "body": "2021/05/01 - 2021. 05. 01 회의록속죄스택: 서일 님(2), 조민정 님(1)  김남혁 님:     포스트를 쓰려고 했는데 일단 미뤘습니다. 민정님께 배워서 쓰겠습니다.    버트는 서버 받은거에 학습시키는 중이다. 일반 위키 데이터 준비 해뒀고 종빈님 데이터 바로 합쳐서 진행할 거고, 다음주 회의 때 까지는 MRC 괜찮게 가져올 수 있을 것 같습니다.    약간의 버그가 있는데, 빠르게 진행될 수 있을 것 같습니다.     우종빈 님:     전처리에 애를 먹고 있어서 시간을 뺃기고 있다. 끌고오면 점단위로 나누는데, 방어률에 있는 점단위로도 나눠버려서 힘들어요ㅠㅠ         서일 님: 죄인이 붙겠습니다.           자연어를 물어보면 정형 데이터에서 답을 가져올 수 있는 그런 트랜스포머 모델이 있다.    저희 MRC 야구 전용 데이터로 만들어야 하나요?         남혁 님: 야구 마스크 지문으로 프리트레인 걸고, 소수의 전용 데이터를 사용해도 될 것 같습니다.           나무위키 데이터도 있다.          학습에 사용하는게 좋을까요?     야구에 관련된 것만?     남혁 님: 일반 데이터와 도메인 데이터의 비율을 잘 잡아야할 것 같다.            용준 님:     NER은 코엘렉트라로 진행했고, 모델 학습이 초기로 되서 뉴스 기사로 찍어봤다.          생각보다는 안나오는 편이다. ( 외귁인 선수 이름과 한국인 선수 이름을 외국인선수 이름을 팀명으로 주는 경우가 왕왕있다. )          일반적 위키 데이터도 좋지만, 질문 데이터가 들어가는게 효율이 좋을 것 같다.          GPT 같은 느낌?     우종빈 님: 다운스트림에서 KoQuAD로 학습할 텐데, 야구 관련된 도메인 데이터를 얼마나 늘려야 할까?             김남혁 님: 결과를 보고, 데이터를 추가하는 식으로 진행하는게 효율적일 것 같습니다. 예를 들어 잘 대답 못하는 것들에 대해서 데이터를 만들어 추가학습                     NER은 MRC를 위한 문서 검색(리-트리버) 용으로 사용할 예정입니다.    우종빈 님: 누구랑 누구랑 비교를 용의하게 하는 것이 NER을 활용하면 가능할까요?         최병민 님: MRC는 고게 좀 어려울 것 같습니다ㅜㅜ           전재열 님:     챗봇 반려당해서 재신청 중이다.    기여할 수 있는 부분이 명확하질 않아서. . 하차를 고민하고 있습니다…         서일 님: 저도 이러케 붙여있는데 ㅠㅠ           최병민 님:     플라스크 쪽으로 찾고, 아이디어를 검토했다.    모든 문서에 대한 MRC? 처리를 해야할 것 같다.          우종빈 님: 리트리버!!!! 저희가!!!!! 지금 1등 입니다!!!!!          문서 데이터를 찾을 때, 위계적으로 찾아줄 수도 있을 것 같다.          아예 카테고리 형식으로 대분류 들어가고, 소분류 들어가기             리트리버 사용 이전에, 카테고리를 한번 분류하기                우종빈 님: 데이터가 조직적이지 않은 경우가 조금 있어서, 바로 리트리버를 사용하는 것도 같이 고려해야할 것 같다.              최병민 님: 후보군을 찾아주는 건 잘 될 것 같다.                 김남혁 님: 해볼만 한 것 같다. 대분류 정도는 충분히 가능할 것.           개요를 가지고 프리트레인하기 -&gt; 캬 이건 논문감이다.    DST… 도메인 관련 대화 데이터 셋이 있어야 하는데, 구하기가 어려울 것 같습니다… 검토 하겠습니다.    "
    }, {
    "id": 18,
    "url": "http://localhost:4000/kbobert-2/",
    "title": "KBOBERT-2",
    "body": "2021/05/01 - KBOBERT-2Abstract: 야구 관련 문서 만을 사용해서 BERT를 학습시킬 것인지 일반적인 문서도 추가하여 BERT를 학습시킬 것인지 판단하기 위해서, 지난 번에 수집한 KBO 뉴스 기사와 일반 위키 문서를 바탕으로 BERT를 학습시켜 보았습니다. Data: 위에서 언급한대로 약 46,000건의 KBO 관련 뉴스와 위키 문서를 사용했습니다. Test: 그 결과, 야구 도메인에 관련된 [MASK]의 예측 능력이 떨어지는 것을 확인할 수 있었습니다. 이로 미루어 보아, 일반적인 문서를 아예 추가하지 않거나 소수만은 추가해야겠다고 판단했습니다. "
    }, {
    "id": 19,
    "url": "http://localhost:4000/meeting_log/2021_04_24",
    "title": "meeting_log_2021.04.24",
    "body": "2021/04/24 - 2021. 04. 24 회의록   김남혁 님:   크보 버트 레포에 학습해둔거 정리해뒀다.  야구 관련된 것은 잘 하는 편이다.  데이터가 적어도 가능함 종빈님 데이터랑 + 일반적 위키 데이터 + 뉴스 데이터까지 넣어서 버트 학습할 예정 NER(스몰) MRC(라지) 가능하면 스테이지3 초반에 서버를 최대한 활용해서 버트를 미리 학습 MRC프리트레인 모델: 보험확보(klue) 일단 백엔드 팀이 이걸 받아서 구축하면 될 것 같다.  MRC 학습이 오래 걸릴 것 같다. (AMP 확인, numworker 확인 필요, 미리 학습을 해봐야 할 것 같음)     개체명 인식:   tag 수 줄여서 정확도 올리고, 필요없는 태그들은 날릴 계획이다.  KBO 버트 프리트레인 된 것으로 ner 다운스트림 시도 예정     크롤링:   위키들 크롤링 끝났고, 선수2000명, 구단 10개 전처리가 필요, 패턴을 잡기가 어려움 어떻게 잡아야 할지 궁리중 약간 문제가 있는 점은 류현진 같은 점은 안에 안에 여러 페이지가 있다.  한단계 밑으로 내려가면 파일이 엄청 커진다. 형식 깨져서 손봐야 하는 부분도 있다.  용어는 아직 안되어 있지만 전처리 하는것만 해결되면 ㅇㅋ 전처리 시에 제목과 내용을 따로 해야하는가?   선수경력/연도/ 소제목도 가져와야할까?   문서를 자르는 기준이 될 수 있어서 소제목을 보존하는게 필요할 것 같다.    문서를 아예 쪼개버리는게 좋을 수 있을 것 같다.     백엔드:   어제 권한 승인 받음, 채팅방 UI 정해야 할 것 같다.  실험하고, 블로그에 글을 올리도록 할 것이다.   백엔드 검색하는거 붙여보고 있다.  챗봇의 형태를 결정해야 할 것 같다. 벡터 유사도 기반 + MRC 어떻게 할지 예상 질문을 만들어야 한다.  서비스적인면에서는 MRC만 쓰는 것 보다는 벡터 유사도 기반 난이도 측면에서는 룰만 있는게 쉽다.   우선 2개다 개발을 해보고, 어렵다 싶으면 룰베이스를 포기하는 식으로   눈깔 붙이기 조는 대기중이라 문제없을 것 같다.     블로그 글 쓰기:   이거 뭘 쓰면 되는건가요???? 심리학과 팡팡울엉쇼   핵 md 자체를 회의 일지로 활용할 수 있을 것 같다.   about을 완성하지 못해서: 프로젝트만? 팀원까지?     속도를 좀 내야할 것 같다.  "
    }, {
    "id": 20,
    "url": "http://localhost:4000/kbobert-1/",
    "title": "KBOBERT-1",
    "body": "2021/04/24 - KBOBERT-1Abstract: 야구 도메인에 특화된 BERT로 NER과 MRC를 개발하면 성능이 더 좋을 것 같다고 생각했습니다. 만약 성능이 나쁘다고 하더라도, 대체할 수 있는 pretrain된 BERT들이 존재하기 때문에 부담 없이 진행해볼 수 있었습니다. Data: 우선 KBO와 관련된 뉴스 기사 약 46,000건을 수집했습니다. 이후 야구 관련 위키 데이터와 일반 위키 데이터를 추가하면 pretrain을 하기에는 충분하다고 판단했습니다. KBO 관련 뉴스 데이터 크롤러는 해당 repo를 참고하시면 됩니다. Train: BERT 학습을 위한 코드를 모두 직접 구현한다면 가장 좋겠지만, 시간상의 문제로 어려움이 있었습니다. 그래서 Hugging Face를 사용하여 BERT를 학습했습니다. 이후 MRC도 Hugging Face를 활용할 계획이기 때문에, 해당 방법이 가장 좋다고 판단했습니다. BERT 학습은 해당 repo를 참고하시면 됩니다. 그리고 학습은 V100으로 이루어졌습니다. Test: 정상적으로 BERT가 학습되는지 확인하기 위해, KBO 뉴스 기사 약 46,000건으로 학습 후 테스트해 보았습니다. 그 결과, 야구 도메인에 관련된 단어를 [MASK] 처리하더라도 예측을 잘하는 모습을 확인할 수 있었습니다. 이로 미루어 보아, 학습 데이터를 더 추가한다면 충분히 사용할만한 BERT가 학습될 것 같습니다. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/meeting_log/2021_04_17",
    "title": "meeting_log_2021.04.17",
    "body": "2021/04/17 - 2021. 04. 17 회의록 필요한 기능 선정     카테고리 선택   질문 입력   NER로 개체명 인식   (NER로 카테고리 미리 만들기?, 자주 들어오는 개체명의 질문 딕셔너리 형태로 만들어두기? DB 작업으로 바뀌어서 빨라진다!)   Elasticsearch로 (사전구축 된) 문서DB 검색   MRC   답변 출력   dst는 어디로 가야할까요?  업무 분담 구체화 카테고리     선수: 나무위키   구단: 나무위키   기록: pdf 인형 눈깔 붙이기, 세이버 메트릭스 문서화   용어   기타     워드프레스? github pages github organization WIKI 형태로 실시간 기록 기능 api??? api!!!   korquad2. 0 data 표관련 참조   각자 팀으로 모이기     팀으로 구분   백엔드 팀 : 전재열, 조민정, 최병민, 서일(예비)   MRC 팀 : 김남혁, 우종빈, 유영재    백엔드     플라스크를 쓸거다   Mysql을 쓸거다   엘라스틱 서치   mrc로 넘길지 우리가 할지         백엔드 팀에서 하는 게 맞지 않을까?          "
    }, {
    "id": 22,
    "url": "http://localhost:4000/kbo-record-crawler/",
    "title": "KBO Record Crawler",
    "body": "2021/04/17 - KBO Record CrawlerAbstract: 챗봇에 사용될 KBO의 기록을 수집하기 위한 크롤러입니다. Source: KBO 기록을 제공하는 사이트는 많이 있습니다. 저희는 그중에서도 KBO 공식 기록실 데이터를 수집했습니다. 여러 사이트 중에서 KBO 공식 기록실이 가장 깔끔했고 정확한 데이터를 제공했기 때문에, 해당 사이트를 기준으로 데이터를 수집했습니다. Term: 2002년부터 2020년까지의 데이터를 수집했습니다. 2001년 이전의 데이터도 존재하지만, 2002년을 기준으로 데이터 포맷이 바뀌었기 때문에 2002년 이후의 데이터만을 수집했습니다. 물론, 포맷을 맞춰줄 수는 있었겠으나, 2001년 이전과 같이 오래된 기록을 질문할 가능성은 희박하다고 생각되어 일단 배제했습니다. Kinds: 선수와 팀의 타자, 투수, 수비, 주루 기록을 각각 수집했습니다. 그리고 merge할 수 있는 부분은 merge하여 total 데이터로 정리했습니다. Usage: 자세한 사항은 해당 repo를 참고해주시면 됩니다. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/meeting_log/2021_04_10",
    "title": "meeting_log_2021.04.10",
    "body": "2021/04/10 - 2021. 04. 10 회의록 필요한 기능 선정     카테고리 선택   질문 입력   NER로 개체명 인식   (NER로 카테고리 미리 만들기?, 자주 들어오는 개체명의 질문 딕셔너리 형태로 만들어두기? DB 작업으로 바뀌어서 빨라진다!)   Elasticsearch로 (사전구축 된) 문서DB 검색   MRC   답변 출력   dst는 어디로 가야할까요?  업무 분담 구체화 카테고리     선수: 나무위키   구단: 나무위키   기록: pdf 인형 눈깔 붙이기, 세이버 메트릭스 문서화   용어   기타     워드프레스? github pages github organization WIKI 형태로 실시간 기록 기능 api??? api!!!   korquad2. 0 data 표관련 참조   각자 팀으로 모이기     팀으로 구분   백엔드 팀 : 전재열, 조민정, 최병민, 서일(예비)   MRC 팀 : 김남혁, 우종빈, 유영재    백엔드     플라스크를 쓸거다   Mysql을 쓸거다   엘라스틱 서치   mrc로 넘길지 우리가 할지         백엔드 팀에서 하는 게 맞지 않을까?          "
    }, {
    "id": 24,
    "url": "http://localhost:4000/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - Memoirs theme has Prism highlighter integrated. I will show you in this post a few examples of how it looks if you are a developer planning to add pieces of code on your website. HTML: &lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: . highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: // alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: print( Hello World )Ruby: require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: printf( Hello World );"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});