## Lecture-1

### 실행

1. download sources

```
$ git clone https://github.com/performance-lecture/lecture-1.git
```

2. install dependencies

```
$ npm install
or
$ yarn
```

3. start development server

```
$ npm run start
or
$ yarn start
```

4. start json-server

```
$ npm run server
or
$ yarn server
```
*3번의 dev server 와 다른 콘솔에서 띄워줍니다.

5. build + serve

```
$ npm run serve
or
$ yarn serve
```

### TIPS
cra-bundle-analyzer
패키지는 해당 서비스의 번들 파일과 그 안에 있는 모든 패키지를 브라우저상에 나타낸다. 파일의 실제 크기에 따라 비율로 보여주기 때문에, 어떤 패키지가 어느 정도의 용량을 차지하는지  보여준다.

텍스트 압축 옵션
npx serve --help <- 를 입력 시, 사용할 수 있는 옵션들을 볼 수 있다.
s옵션은 SPA 서스를 위해 매칭되지 않는 주는 모두 index.html로 보내겠다는 옵션.
u옵션은 텍스트를 압축하지 않겠다는 옵션임. 