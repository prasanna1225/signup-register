import React from "react";
import arrow from "../images/page26/arrow.svg";

const PaymentMethods=()=>{
    return (
        <div className="payMeth flex">
            <img className="mx-10"src={arrow} alt=""/>
            <div className="content">
                <h1 className="text-[32px]">Payment Methods</h1>
                <p>
                    Ut non tempor sit facilisi pretium enim eu pharetra, netus elementum massa malesuada cursus sit in urna blandit viverra at vel, massa dignissim nam et
                </p>
            </div>
        </div>
    )
}

export default PaymentMethods;