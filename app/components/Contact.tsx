"use client";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Styles from "../styles/contact.module.css";

export default function Contact() {
  useSmoothScroll();
  const form_key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  return (
    <div className={Styles.container} id="Contact">
      <div className={Styles.contact_cont}>
        <div className={Styles.contact_content}>
          <h1 className={Styles.contact_upper}>
            <span className={Styles.contact_header}>
              Contact
            </span>
            <span className={Styles.contact_subheader}>
              Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </span>
          </h1>
          <div className={Styles.form_container}>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={form_key} />
                <div className={Styles.form_field}>
                  <label htmlFor="name" className={Styles.form_label}>Name</label>
                  <input type="text" name="name" id="name" required className={Styles.form_input} />
                </div>
                <div className={Styles.form_field}>
                  <label htmlFor="email" className={Styles.form_label}>Email</label>
                  <input type="email" name="email" id="email" required className={Styles.form_input} />
                </div>
                <div className={Styles.form_field}>
                  <label htmlFor="message" className={Styles.form_label}>Message</label>
                  <textarea cols={10} rows={3} name="message" id="message" required className={Styles.form_input}></textarea>
                </div>
                <button type="submit" className="btn">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}
