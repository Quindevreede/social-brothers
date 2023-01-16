import React from "react";
import {Link} from "react-router-dom";

function RedirectPage() {
    return (
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <section className="text__content">
                        <p><strong>NO AUTH TO ACCESS LOCKED PAGES</strong></p>
                        <p><Link to="/signup"><br/>REGISTER</Link> / <Link to="/signin">LOG
                            IN</Link><Link to="/">OR HOME</Link></p>
                    </section>
                </div>
            </section>
        </>
    )
}

export default RedirectPage;