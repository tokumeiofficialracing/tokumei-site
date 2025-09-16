function Apply() {
  return (
    <div className="page">
      <h1>Apply to Join Tokumei Racing</h1>
      <form
        action="https://formspree.io/f/mwkdekyz" 
        method="POST"
      >
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" required />
        </label>
        <label>
          Simracing Experience (years):
          <select name="experience">
            <option value="0">0</option>
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
            <option value="5+">5+</option>
          </select>
        </label>
        <label>
          Reason for your application:
          <textarea name="reason" required></textarea>
        </label>
        <label>
          Social Media URL:
          <input type="url" name="social[]" />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Apply;
