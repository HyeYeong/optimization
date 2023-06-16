### 실행

1. download sources

```
$ git clone https://github.com/performance-lecture/lecture-4.git
```

2. install dependencies

```
$ npm install
or
$ yarn
```

3. start development server

```
$ npm start
or
$ yarn start
```

4. start json-server (image server)

```
$ npm run server
or
$ yarn server
```
*3번의 dev server 와 다른 콘솔에서 띄워줍니다.

### TIPS
- layout shift의 가장 흔한 원인
- 사이즈가 미리 정의되지 않은 이미지 요소
- 사이즈가 미리 정의되지 않은 광고 요소
- 동적으로 삽입된 콘텐츠
- 웹 폰트(FOIT, FOUT)
