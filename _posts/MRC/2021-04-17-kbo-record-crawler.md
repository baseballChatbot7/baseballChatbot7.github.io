---
title: KBO Record Crawler
layout: post
author: skaurl
categories:
- MRC
image: assets/images/Crawler.jpeg
---

# KBO Record Crawler

## Abstract

챗봇에 사용될 KBO의 기록을 수집하기 위한 크롤러입니다.

## Source

KBO 기록을 제공하는 사이트는 많이 있습니다. 저희는 그중에서도 [KBO 공식 기록실](https://www.koreabaseball.com/Record/Player/HitterBasic/Basic1.aspx) 데이터를 수집했습니다. 여러 사이트 중에서 KBO 공식 기록실이 가장 깔끔했고 정확한 데이터를 제공했기 때문에, 해당 사이트를 기준으로 데이터를 수집했습니다.

## Term

2002년부터 2020년까지의 데이터를 수집했습니다. 2001년 이전의 데이터도 존재하지만, 2002년을 기준으로 데이터 포맷이 바뀌었기 때문에 2002년 이후의 데이터만을 수집했습니다. 물론, 포맷을 맞춰줄 수는 있었겠으나, 2001년 이전과 같이 오래된 기록을 질문할 가능성은 희박하다고 생각되어 일단 배제했습니다.

## Kinds

선수와 팀의 타자, 투수, 수비, 주루 기록을 각각 수집했습니다. 그리고 merge할 수 있는 부분은 merge하여 total 데이터로 정리했습니다.

## Usage

자세한 사항은 해당 [repo](https://github.com/baseballChatbot7/KBO-Record-Crawler)를 참고해주시면 됩니다.
