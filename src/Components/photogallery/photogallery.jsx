import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Modal from "../modal/modal";
import SmallPhoto from '../../Assets/images/smallphoto.png'

//img
import Arrow from "../../Assets/images/arrow";

const arr = [
    {
        id: 1,
        title: "Xavfli gewwwwwologik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
        desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
        link: "https://kun.uz"
    },
    {
        id: 2,
        title: "Xavfli geoloefefrfrgik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
        desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
        link: "https://kun.uz"
    },
    {
        id: 3,
        title: "Xavfli geologik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
        desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
        link: "https://kun.uz"
    },
    {
        id: 4,
        title: "Xavfli geologik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
        desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
        link: "https://kun.uz"
    },
]


function Photogallery() {
    // const img = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    const [data, setData] = useState(arr)
    const [modal, setModal] = useState([false])

    const langValue = useRef();
    const dispatch = useDispatch();
    const {
        count: { lang },
    } = useSelector((state) => state);

    function getLang() {
        dispatch({ type: window.localStorage.getItem("lang") || "ru" });
    }

    langValue.current = getLang;

    useEffect(() => {
        langValue.current();
    }, []);


    const { photogallery: p } = Content[lang];

    // useEffect(() => {
    //     fetch('',)
    //         .then(res => res.json())
    //         .then(data => setData(data.data))
    //         .catch(e => console.log(e))
    // }, [])


    return (
        <>
            <section className="photogallery" >
                <div className="container">
                    <h2 className="photogallery__heading">{p.heading}</h2>
                    <Swiper className="photogallery__slider"
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn",
                        }}
                    >
                        {
                            data && data.map((e, i) => (
                                <SwiperSlide key={i} onClick={() => setModal([true, i])}>
                                    <div className="">
                                        <Image src={SmallPhoto} alt={e.title} width={435} height={320} />
                                    </div>
                                    <h3 className="photogallery__slider__title">{e.title}</h3>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <button className="prev-btn">
                        <span className="arrow">
                            <Arrow color={"white"} />
                        </span>
                        <span className="arrow-disabled">
                            <Arrow color={'#25689E'} />
                        </span>
                    </button>
                    <button className="next-btn">
                        <span className="arrow">
                            <Arrow color={"white"} />
                        </span>
                        <span className="arrow-disabled">
                            <Arrow color={'#25689E'} />
                        </span>
                    </button>
                </div>

                <Modal setModal={setModal} modal={modal} />
            </section>
        </>
    )
}

export default Photogallery