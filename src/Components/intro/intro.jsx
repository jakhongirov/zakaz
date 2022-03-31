import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

// import Img from '../../Assets/images/intro.png'

const arr = [
    {
        id: 1,
        title: "Xavfli geologik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
        desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
        link: "https://kun.uz"
    },
    {
        id: 2,
        title: "Xavfli geologik jarayonlarni kuzatish davlat xizmati! 2021 yil qish-bahor mavsumiga tayyorgarlik",
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


function Intro() {
    // const img = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    const [data, setData] = useState(arr)

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

    const { intro: i } = Content[lang];

    // useEffect(() => {
    //     fetch('',)
    //         .then(res => res.json())
    //         .then(data => setData(data.data.reverse().slice(0, 4)))
    //         .catch(e => console.log(e))
    // }, [])

    return (
        <section className="intro">

            <Swiper
                className="intro__slider"
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            >

                {
                    data && data.map((e, i) => (
                        <SwiperSlide key={i} className='intro__slider__item '  /* </Swiper>*style={{ backgroundImage: `url('../../images/intro.png') !important` }} */ >
                            <div className="container">
                                <div className="slider__box">
                                    <h2>{e.title}</h2>
                                    <p>{e.desc.split(' ').slice(0, 20).join(' ') + '...'}</p>
                                    <button>
                                        <Link href={e.link}>
                                            <a>redirect</a>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

export default Intro