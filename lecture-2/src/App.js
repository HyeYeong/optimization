import React, { useState, Suspense, lazy, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InfoTable from './components/InfoTable'
import SurveyChart from './components/SurveyChart'
import Footer from './components/Footer'
const LazyImageModal = lazy(() => import('./components/ImageModal'))

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const component = import('./components/ImageModal')
    // NOTE: 첫 번째 사진을 사전로드 해서 모달을 열었을 때의 동작이 지연되지 않도록 해 준다. 다른 사진은 불필요한 리소스로 인해 로드가 늦어질 수 있으니 첫 번째 사진만 사전로드 처리 해 준다. 
    // 一番目の画像をページへ飛ばす瞬間ロードして、モーダルを開いた時の動作が遅延されないように処理する。他の画像はリソースのダウンロードが多くなるので、１番目のの画像のみにする。
    const img = new Image();
    const firstImgSrc = 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800'
    img.src = `'{${firstImgSrc}}'`
  }, [])

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal 
        onClick={() => {
          setShowModal(true) 
        }}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? <LazyImageModal closeModal={() => { setShowModal(false) }} /> : null}
      </Suspense>
    </div>
  )
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`

export default App
