import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//img
import Arrow from "../../Assets/images/arrow";
import BigPhoto from '../../Assets/images/bigphoto.png'

const arrr = [
    {
        id: 1,
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    },
    {
        id: 2,
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    },
    {
        id: 3,
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    },
    {
        id: 4,
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    },
]

function Modal({ modal, setModal }) {
    const [data, setData] = useState(arrr)

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setData(data.data))
    //         .catch(e => console.log(e))
    // }, [modal])


    return (
        <>
            <div className={modal[0] ? 'modal modal__show' : 'modal'}>
                <div className="modal__item ">
                    <Swiper
                        className="modal__slider"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".modal__next-btn",
                            prevEl: ".modal__prev-btn",
                        }}
                    >
                        {
                            data && data.map((e, i) => (
                                <SwiperSlide key={i}>
                                    <Image src={BigPhoto} alt={e.img} width={1200} height={600} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <button className="modal__prev-btn">
                        <span className="arrow">
                            <Arrow color={"white"} />
                        </span>
                        <span className="arrow-disabled">
                            <Arrow color={'#25689E'} />
                        </span>
                    </button>
                    <button className="modal__next-btn">
                        <span className="arrow">
                            <Arrow color={"white"} />
                        </span>
                        <span className="arrow-disabled">
                            <Arrow color={'#25689E'} />
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal