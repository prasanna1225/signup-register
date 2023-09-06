import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import llogin from "../../images/Otp.png";


function Otp() {

    const [selectedButton, setSelectedButton] = useState("Option 1");

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText);
    };

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className={styles.img} src={llogin} alt="otp-image" />
                </div>
                <div className={styles.right}>
                    <div className={styles.heading_container}>
                        <h2 className={styles.from_heading}>Join Edfling as a</h2>
                    </div>
                    <div className={styles.buttons_container}>
                        <button
                            className={
                                selectedButton === "Option 1"
                                    ? `${styles.join_button} ${styles.selected}`
                                    : styles.join_button
                            }
                            onClick={() => handleButtonClick("Option 1")}
                        >
                            User
                        </button>
                        <button
                            className={
                                selectedButton === "Option 2"
                                    ? `${styles.join_button} ${styles.selected}`
                                    : styles.join_button
                            }
                            onClick={() => handleButtonClick("Option 2")}
                        >
                            Instructor
                        </button>
                        <button
                            className={
                                selectedButton === "Option 3"
                                    ? `${styles.join_button} ${styles.selected}`
                                    : styles.join_button
                            }
                            onClick={() => handleButtonClick("Option 3")}
                        >
                            TA
                        </button>

                    </div>
                    <h2 className={styles.from_heading}>Verify OTP {otp.join("")}</h2>
                    <div className={styles.otp_container}>

                        {
                            otp.map((data, index) => {
                                return (
                                    <input
                                        type="number"
                                        className={styles.otp_field}
                                        placeholder="0"
                                        min={0}
                                        max={9}
                                        maxLength={1}
                                        name="otp"
                                        key={index}
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onFocus={e => e.target.select()}
                                        required
                                    />
                                )
                            })
                        }

                    </div>
                    <button className={styles.btn} onClick={e => alert("Entered OTP is " + otp.join(""))}>Verify</button>
                    <span className={styles.text_span1}>
                        <Link style={{ textDecoration: 'none' }} to="/otp">Didn't receive otp ? <a href="">Resend otp</a></Link>
                    </span>
                    <span className={styles.text_span2}>
                        <Link to="/otp">An OTP has been sent to your registered Email address or Phone number, please verify it.</Link>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default Otp;
