import styles from "./Sidebar.module.css";

function Sidebar({children}) {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  );
}
{/* 
				<Sidebar>
					<CardFlip imageFront={imageCirno} frontTitle="Adrian Adona" frontText="Full Stack Developer" imageShapeFront="roundedImage" 
						imageBack={imageTeto} backTitle="" backText="Wanker" imageShapeBack="roundedImage" />
					<Card Name="Info" Text="Welcome to my portfolio!" variant="smallCard" />
					<Linkbar src={githubIcon} label="GitHub" href="https://github.com/PossiblyBread" />
					<Linkbar src={phoneIcon} label="(+63) 918-402-5526" />
				</Sidebar>
				<div className="container">
				<Carousel
					slides={[
					{
						image: imageCirno,    
						caption: "Beautiful Landscape",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					},
					{
						image: imageTeto,    
						caption: "Mountain View",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
					},
					]}
					variant="profileCard"
					border
				/>
			</div> */}
export default Sidebar;