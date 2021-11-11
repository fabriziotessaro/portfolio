import Image from "next/image";

import styles from "../styles/ProjectImages.module.css";

export default function ProjectImages({ selectedImage, name, imagesCollection, handleImage }){
	return(
		<section className={styles.container}>
			<div className={styles.selectedImage}>
				<Image 
                    src={selectedImage} 
                    alt={name}
			        layout="fill"
			        objectFit="cover"
                />
			</div>
			<div className={styles.imagesCollection}>
				{imagesCollection?.map(img => 

					<div 
						className={`${styles.imagePreview} 
						${selectedImage === img && styles.imgSelected}`}

						onClick={() => handleImage(img)}
					>			
						<Image
			                layout="fill"
			        		objectFit="cover"
			                src={img}
			                alt={name}
			              />
					</div>
				)}
			</div>
		</section>
	)
}