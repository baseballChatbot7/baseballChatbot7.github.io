---
title: 카카오 봇을 만들어 보자
layout: post
author: happyBeagle
categories:
- Backend
image: assets/images/opengraph.png
---

# 카카오 봇을 만들어 보자 

## 준비물

* 카카오 봇과 통신할 서버
* FLASK

## 1. 서버 구축하기

우선, 해당 프로젝트에서 서버는 FLASK로 구성되어 있다.  
그렇다면 서버는 어디에 구축해야할까?   
나는 우선 AWS에 서버를 구축하고자 하였다.   
@[aws 서버 구축](https://aws.amazon.com/ko/free/?trk=ps_a134p000003yHYmAAM&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=Google&sc_category=Core-Main&sc_country=KR&sc_geo=APAC&sc_outcome=acq&sc_detail=aws&sc_content=Brand_Core_aws_e&sc_segment=444218215904&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|KR|EN|Text&s_kwcid=AL!4422!3!444218215904!e!!g!!aws&ef_id=Cj0KCQjw78yFBhCZARIsAOxgSx3rXWSipdhn3Pw6TpGlvsh7Z0lWqzNYZcdYdJN-y73HNkR4HfRFn8oaAnRQEALw_wcB:G:s&s_kwcid=AL!4422!3!444218215904!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)

![image](https://user-images.githubusercontent.com/68745983/120215008-30748380-c270-11eb-9d64-39ff224e070c.png)   

* AWS의 프리티어 지원을 해주는 인스턴스를 선택하여 서버를 구성하였습니다.
* **자, 그럼 이제 FLASK를 서버에 설치해줄까요?**
* [참고 블로그](https://salguworld.tistory.com/12)
* ![image](https://user-images.githubusercontent.com/68745983/120216486-0e7c0080-c272-11eb-8e2f-f4ff018a00ba.png)     
* 이렇게 FLASK가 설치된 것을 확인할 수 있다.    
* 그렇다면 이제 서버를 돌려보도록 하자 ><     

## 2. 서버 구성하기    

우선 Toy Code를 만들어 서버를 열고 확인해보자.

```    
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/keyboard')
def Keyboard():
    dataSend = {
    }
    return jsonify(dataSend)

if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 5000)

```     
위의 코드를 돌리고 서버의 url:5000/에 접속해보자.
![image](https://user-images.githubusercontent.com/68745983/120227780-cfa37600-c284-11eb-9c2f-9b149180c648.png)    

잘 실행되는 것을 확인 할 수 있다.   
자, 그렁다면 이제 카카오 챗봇과 서버를 연결해줘야한다.   

## 3. 챗봇 연결하기   
### 1. 챗봇 만들기    

@[카카오 채널 관리자 센터](https://center-pf.kakao.com/)   

위의 url을 통해 카카오 채널을 만들어 주자. 여기서 주의해야하는 것은   

** 대시보드 > 프로필 설정 > 채널 공개**를 허용해야한다.   
![image](https://user-images.githubusercontent.com/68745983/120228061-59ebda00-c285-11eb-9189-09dbfb831f49.png)   

자, 그렇다면 카카오 오픈빌더를 통해 챗봇을 생성하여 생성된 오픈채널과 연결해주어야한다.   
그러면 카카오 오픈빌더에서 챗봇을 만들어 보자.   

@[카카오 채널 챗봇 만들기](https://i.kakao.com/)   

해당 페이지를 들어가면 아래와 같이 선택지가 뜨는데 여기서 **카카오톡 채널 챗봇 만들기**를 선택해줘야한다.    

![image](https://user-images.githubusercontent.com/68745983/120228240-b2bb7280-c285-11eb-86cf-98f6f178cbdd.png)    

여기서 신청서를 조금 자세하게 적으면 승인이 될것이다 (대충 썼다가 한번 반려당했다 + 위의 카카오톡 채널공개 안했다가 한번더 반려당했다.)   

### 2. 서버와 챗봇 연결하기   

우선 앞서 만들어놓은 server.py code에 아래의 method를 추가해주자.   

```    
@app.route('/message', methods=['POST'])
def Message():
    content = request.get_json()
    text = content['userRequest']['utterance'].strip()
    print(text)
    if text == "hello":
        dataSend = {
                "version": "2.0",
                "template": {
                    "outputs": [
                        {
                            "simpleText": {
                                "text": "안녕 함 :)"
                            }
                        }
                    ]
                }
            }
    else:
        dataSend = {
                "version": "2.0",
                "template": {
                    "outputs": [
                        {
                            "simpleText": {
                                "text": "안녕 못함 :)"
                            }
                        }
                    ]
                }
            }

    return jsonify(dataSend)
```    

* url:port/message의 경로에 카카오 챗봇이 보내는 형식대로 데이터를 보내면 조건에 따라 "안녕 함:)", "안녕 못함 :)"을 보내는 함수이다.   
* 이를 적용시키고 다시 실행시켜보자. 
* 그리고 승인된 챗봇관리 페이지에서 **스킬** 메뉴에 들어가서 **생성**을 눌러 새로운 스킬을 생성하도록하자.   
* ![image](https://user-images.githubusercontent.com/68745983/120229445-1fd00780-c288-11eb-8207-d376d7a934e3.png)   
* 위의 url에 **url:port/message**를 넣어주면 위의 함수의 조건 즉, hello라고 물어본것이 아니면 모두 "안녕 못함 :)"이라고 답변하는 함수가 작동이 된다.   


## Next Time....   

* 다음 시간에는 의도치않게 inference 시간이 오래걸려 답변을 하지 못하는 일이 생길 수 있다.    
* 해당 경우, 어떻게 대처할지 알아보자.
