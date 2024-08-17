import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from 'three';

const Model = () => {
  /* references for each phone  */
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, []);
  <section className="common-padding">
    {/*header*/}
    <div className="screen-max-width">
      <h1 id="heading" className="section-heading">
        Take a closer look.
      </h1>

      {/*Container*/}
      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
        {/*Rendering custm component that has all the logic*/}
        <ModelView
        />
        </div>
      </div>
    </div>
  </section>
}
export default Model
