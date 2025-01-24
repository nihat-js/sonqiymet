export default function Page() {
  return (
    <main>
      <div className="contact">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <h3>Contact Information</h3>
        <p>Email: support@sonqiymet.com</p>
        <p>Phone: +994 50 123 45 67</p>
      </div>

    </main>
  )
}