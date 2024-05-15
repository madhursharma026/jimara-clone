import SubHeading from "./SubHeading";

export default function Programs({ ImageURL, HeadingTitle, SubHeadingTitle, SubHeadingTitle2 }) {
    return (
        <div class="card w-100 border-0 h-100" style={{ boxShadow: '0 20px 50px rgba(21,21,21,.1)' }}>
            <div class="card-body text-center">
                <div className="bg-success p-3" style={{ maxWidth: '80px', margin: 'auto', borderRadius: '100%', marginTop: '-50px' }}>
                    <img src={ImageURL} alt="#ImgNotFound" className="w-100" />
                </div>
                <h1 class="card-title mt-3"><b>{HeadingTitle}</b></h1>
                <SubHeading subHeading={SubHeadingTitle} />
                <div className="px-3" style={{ borderRadius: '50% 50% 0 0 / 20px 20px 0 0', background: 'rgba(21,21,21,.1)', paddingTop:"30px", paddingBottom:"10px" }}>
                    <b><SubHeading color={true} subHeading={SubHeadingTitle2} /></b>
                </div>
            </div>
        </div>
    );
}

