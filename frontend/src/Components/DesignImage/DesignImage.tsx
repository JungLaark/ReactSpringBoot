import React, {useState, useEffect} from 'react'
import {fabric} from 'fabric';

type Props = {}


const DesignImage = (props: Props) => {


  const [canvas, setCanvas] = useState<fabric.Canvas | null>();

  useEffect(() => {
    const mainCanvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 500
    });

    setCanvas(mainCanvas);
  }, []);


  return (
    <>
      <div>DesignImage</div>
      <div style={{border: 20}}>
        <canvas id='canvas'/>

      </div>
    </>
  )
}

export default DesignImage;