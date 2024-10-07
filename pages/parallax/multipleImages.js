import Parallax from "../../components/multiImgs/Parallax";

export default function MultipleImages() {
    return (
        <div style={{
            backgroundColor: '#282a57',
            color: '#e4e4e4'
        }}>
            <Parallax />
            <div style={{
                color: '#e4e4e4',
                paddingLeft: '10%',
                paddingBottom: '20%'
            }}>
                <h2 style={{
                    color: '#e4e4e4',
                    fontSize: '5rem'
                }}>
                    Lorem ipsum
                </h2>
                <p style={{
                    marginTop: '20px',
                    width: '50%'
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum ipsam corrupti asperiores magnam quos cumque animi tempore vero repellendus, harum odio neque quis, non temporibus. Inventore asperiores repudiandae praesentium ut, fugit quo esse, placeat ullam quibusdam perspiciatis delectus ducimus nihil. Dolorum nam veniam aperiam sapiente corporis! Quisquam, veritatis repellendus?</p>
            </div>
        </div>
    )
}