import ImageBanner from "./ImageBanner";
import TextInfo from "./TextInfo";

const Banner = () => {

    return ( 
        <section className="w-full h-[calc(100vh-100px)]">
            <ImageBanner />
            <TextInfo/>
        </section>
    );
};

export default Banner;