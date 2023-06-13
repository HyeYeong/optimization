# optimization

### lecture-1

블로그 사이트에서의 최적화 / Blogサイトからの最適化

- 이미지 사이즈 최적화<br/>画像のサイズ最適化<br/>
- 코드 분할 /コード分割<br/>
  : 리액트로 만들어진 SPA페이지에서는 하나의 자바스크립트 파일로 번들링되어 로드되기 때문에, 첫 페이지에 진입 시 당장 사용하지 않는 코드가 다소 포함되어있다. 코드 분할을 통해 당장 필요하지 않은 코드를 떼어내고, 해당 코드를 필요한 시점에 로드할 수 있다.
  <br/>Reactで作られたSPAページでは一つのJavasript fileでbundlingしてロードされるため、初期ページにアクセスするとき、しばらく使用しないコードが多数吹くまでている。
  コードの分割をしてそのページにはいらないコードをとって、必要な時点でロードができる。<br/>

- 텍스트 압축 / テキストの圧縮<br/>
  : 웹 페이지에 접속하면 다양한 리소스를 다운로드 받는데, 그 중에는 html, css, javascript 가 포함되어있다. <br/>
  이런 리소스는 다운로드 전에 서버에서부터 미리 압축할 수 있어서 더 작은 파일을 다운로드 받아 페이지 로드 속도를 빠르게 할 수 있다.<br/>
  WEBページにアクセスするといろんなリソースをダウンローをするが、その中ではhtml, css, javascriptが含まれている。<br/>
  このようなリソースはダウンロードする前にサーバからお先に圧縮できるため、もっと小さなファイルにしてダウンロードして、ロードの速度が速くなる。

- 병목 코드 최적화 ボトルネックコード最適化<br/>
  : 어떤 웹 서비스 개발 시 특정 소스 때문에 페이지가 로드되거나 실행되기까지의 속도가 느려지는 경우가 있다. 이처럼 서비스를 느리게 만드는 코드를 병목 코드라고 하는데, 병목코드를 어떤 식으로 찾아내서 최적화할 수 있는 지 알아본다.<br/>
  あるWEBサービス開発のとき、特定のソースのせいでページがロードされるときとか、実行するまで遅くなる場合がある。このようなサービスを遅くするコードをボトルネックコードだというが、どんな方法で探して最適化できるか調べてみる。

### lecture-2

올림픽 통계 서비스 최적화 / オリンピック統計サービス最適化<br/>

- CSS에니메이션 최적화 / CSSアニメーション最適化<br/>
 : 브라우저가 어떻게 화면을 그리는 지 학습하고, 이를 바탕으로 해결책을 찾아 적용한다.<br/>
  ブラウザがどんな方法で画面を作るのかを知って、これを元に解決方法を探して適用してみる

- 컴포넌트 지연 로딩 / コンポネント遅延ロード<br/>
 : 강의1에서는 페이지를 중심으로 코드 분할을 했으나, 이번에는 컴포넌트를 중심으로 코드 분할을 해서 해당 컴포넌트가 로드될 때 코드를 불러오도록 한다. <br/>
  講義１ではページを中心でコードの分割をしたが、今回はコンポネントを中心でコードを分けて、該当コンポネントがロードされるときに呼び出しする。

- 컴포넌트 사전 로딩 / コンポネント事前ロード<br/>
 : 컴포넌트의 코드를 분할하면 페이지 로드 시 필요한 컴포넌트만 다운로드 받게 되어 장점이 될 수 있으나, 서비스 이용 과정에서 분할된 컴포넌트를 사용하려고 할 때 다운로드 되어있지 않은 코드를 추가로 다운로드 하는 시간만큼 서비스 이용에 지연이 발생한다.<br/>
 이런 문제를 해결하기 위해서 코드를 분할하여 첫 화면 진입 시에는 다운로드 하지 않지만 이후 해당 코드가 필요한 시점보다는 먼저 코드를 로드하여 해당 코드를 지연없이 사용할 수 있도록 하는 컴포넌트 사전 로딩 기법을 이용해본다.<br/>
 コンポネントのコードを分割するとページロードする時に、必要なコンポネントのみダウンロードができて良いが、サービス利用で分けられたコンポネントを使う時は、ダウンロードされていないコードを追加でダウンロードするほどサービスが重くなす。<br/>
 こう言う問題を解決する為にコードを分けて初ページにアクセスする時にはダウンロードしないが、その後該当コードが必要な時点よりお先にロードしてロードが早くなる方法を利用してみる。

- 이미지 사전 로딩 / 画像事前ロード<br/>
이미지도 마찬가지로 필요한 시점 이전에 로드하는 기법을 이용해본다.<br/>
画像も同じく必要な時点より前にロードする方法を利用してみる。


npx cra-bundle-analyzer
↑상기 라이브러리를 이용해서 번들 파일 각각의 크기를 눈으로 확인 할 수 있다.
上記ライブラリーを利用して各Bundle fileのサイズが見た目で確認できる。