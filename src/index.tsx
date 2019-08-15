import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation } from "framer"

import "./styles.css"

// Forked
function App() {
  let birdAnim = useAnimation()
  let cloudsAnim = useAnimation()
  let sunAnim = useAnimation()
  let bgAnim = useAnimation()

  return (
    <div className="App">
      <Frame
        size={600}
        background={null}
        center
        onMouseMove={function({ clientX, clientY }) {
          // 1. Find mouse position
          let offsetX = clientX - window.innerWidth / 2
          let offsetY = clientY - window.innerHeight / 2
          // 2. Create animations
          birdAnim.start({ x: offsetX / 6, y: offsetY / 6 })
          cloudsAnim.start({ x: offsetX / 8, y: offsetY / 8 })
          sunAnim.start({ x: offsetX / 10, y: offsetY / 10 })
          bgAnim.start({ x: offsetX / 14, y: offsetY / 14 })
        }}
      >
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          background={null}
          image="https://image.flaticon.com/icons/svg/119/119596.svg"
          animate={bgAnim}
        />
        <Frame
          // sun
          left={155}
          top={15}
          background={null}
          image="https://image.flaticon.com/icons/svg/789/789395.svg"
          animate={sunAnim}
        />
        <Frame
          // cloud
          left={335}
          top={55}
          background={null}
          image="https://image.flaticon.com/icons/svg/414/414927.svg"
          animate={cloudsAnim}
        />
        <Frame
          // bird
          left={35}
          top={200}
          background={null}
          image="https://image.flaticon.com/icons/svg/789/789392.svg"
          animate={birdAnim}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
