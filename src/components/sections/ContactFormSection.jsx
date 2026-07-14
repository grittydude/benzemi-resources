/**
 * ContactFormSection
 *
 * Dark split-layout form section used on the Contact page.
 * Left: info panel (badge, heading, description, contact details)
 * Right: dynamic form driven by enquiryType
 *
 * Props:
 *  enquiryType – one of 'enrolment' | 'partnership' | 'rsvp'
 *  contactInfo – { email, phone, social: [{ label, href }] }
 *  enquiryConfig – { badge, formDescription, cta } from CONTACT_PAGE.enquiryTypes
 */
import { useState } from "react";
import arrowIcon from "../../assets/icons/arrow_icon.svg";
import TagChip from "../ui/TagChip";
import styles from "./ContactFormSection.module.css";

/* ── Field helpers ── */

function Field({ label, required, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && (
          <span className={styles.req} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={[styles.input, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function Select({ children, ...props }) {
  return (
    <select className={styles.select} {...props}>
      {children}
    </select>
  );
}

function Textarea({ ...props }) {
  return <textarea className={styles.textarea} rows={4} {...props} />;
}

/* ── Field-set variants ── */

function EnrolmentFields({ data, onChange }) {
  return (
    <>
      <div className={styles.fieldRow}>
        <Field label="First Name" required>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={onChange}
            placeholder="First Name"
            required
          />
        </Field>
        <Field label="Last Name" required>
          <Input
            name="lastName"
            value={data.lastName}
            onChange={onChange}
            placeholder="Last Name"
            required
          />
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Email Address" required>
          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
        </Field>
        <Field label="Phone Number" required>
          <div className={styles.phoneWrap}>
            <span className={styles.phonePrefix}>+234</span>
            <Input
              name="phone"
              type="tel"
              value={data.phone}
              onChange={onChange}
              placeholder="___ ____ ___"
              required
              className={styles.phoneInput}
            />
          </div>
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Current Status" required>
          <Select
            name="currentStatus"
            value={data.currentStatus}
            onChange={onChange}
            required
          >
            <option value="">Select One</option>
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
            <option value="professional">Working Professional</option>
            <option value="other">Other</option>
          </Select>
        </Field>
        <Field label="Field of Study" required>
          <Select
            name="fieldOfStudy"
            value={data.fieldOfStudy}
            onChange={onChange}
          >
            <option value="">Select One</option>
            <option value="engineering">Engineering</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </Select>
        </Field>
      </div>
      <Field label="Tell us about your goals">
        <Textarea
          name="goals"
          value={data.goals}
          onChange={onChange}
          placeholder="Share what you hope to achieve from this programme…"
        />
      </Field>
    </>
  );
}

function PartnershipFields({ data, onChange }) {
  return (
    <>
      <div className={styles.fieldRow}>
        <Field label="First Name" required>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={onChange}
            placeholder="First Name"
            required
          />
        </Field>
        <Field label="Last Name" required>
          <Input
            name="lastName"
            value={data.lastName}
            onChange={onChange}
            placeholder="Last Name"
            required
          />
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Organisation Name" required>
          <Input
            name="orgName"
            value={data.orgName}
            onChange={onChange}
            placeholder="Organization Name"
            required
          />
        </Field>
        <Field label="Job Title" required>
          <Input
            name="jobTitle"
            value={data.jobTitle}
            onChange={onChange}
            placeholder="Job Title"
            required
          />
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Email Address" required>
          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
        </Field>
        <Field label="Phone Number" required>
          <div className={styles.phoneWrap}>
            <span className={styles.phonePrefix}>+234</span>
            <Input
              name="phone"
              type="tel"
              value={data.phone}
              onChange={onChange}
              placeholder="___ ____ ___"
              required
              className={styles.phoneInput}
            />
          </div>
        </Field>
      </div>
      <Field label="Partnership Interest" required>
        <Select
          name="partnershipInterest"
          value={data.partnershipInterest}
          onChange={onChange}
          required
        >
          <option value="">Select One</option>
          <option value="talent">Talent Pipeline</option>
          <option value="training">Sponsored Training</option>
          <option value="project">Project Collaboration</option>
          <option value="research">Research Partnership</option>
          <option value="other">Other</option>
        </Select>
      </Field>
      <Field label="Tell us about your goals">
        <Textarea
          name="goals"
          value={data.goals}
          onChange={onChange}
          placeholder="Tell us a bit about your goals"
        />
      </Field>
    </>
  );
}

function RSVPFields({ data, onChange }) {
  return (
    <>
      <div className={styles.fieldRow}>
        <Field label="First Name" required>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={onChange}
            placeholder="First Name"
            required
          />
        </Field>
        <Field label="Last Name" required>
          <Input
            name="lastName"
            value={data.lastName}
            onChange={onChange}
            placeholder="Last Name"
            required
          />
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Email Address" required>
          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
        </Field>
        <Field label="Phone Number" required>
          <div className={styles.phoneWrap}>
            <span className={styles.phonePrefix}>+234</span>
            <Input
              name="phone"
              type="tel"
              value={data.phone}
              onChange={onChange}
              placeholder="___ ____ ___"
              required
              className={styles.phoneInput}
            />
          </div>
        </Field>
      </div>
      <div className={styles.fieldRow}>
        <Field label="Event to Attend" required>
          <Select name="event" value={data.event} onChange={onChange} required>
            <option value="">Select One</option>
            <option value="webinar-q3">Q3 Industry Webinar</option>
            <option value="workshop-oct">October Workshop</option>
            <option value="summit">Bezimeni Summit 2026</option>
          </Select>
        </Field>
        <Field label="Number of Attendees" required>
          <Input
            name="attendees"
            type="number"
            min="1"
            value={data.attendees}
            onChange={onChange}
            placeholder="How many persons are you coming with?"
          />
        </Field>
      </div>
      <Field label="Additional Notes">
        <Textarea
          name="goals"
          value={data.goals}
          onChange={onChange}
          placeholder="Anything else you’d like us to know"
        />
      </Field>
    </>
  );
}

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentStatus: "",
  fieldOfStudy: "",
  orgName: "",
  jobTitle: "",
  partnershipInterest: "",
  event: "",
  attendees: "",
  goals: "",
  consent: false,
};

const SUBMIT_LABELS = {
  enrolment: "SUBMIT APPLICATION",
  partnership: "SUBMIT ENQUIRY",
  rsvp: "CONFIRM RSVP",
};

function ContactFormSection({
  enquiryType = "enrolment",
  contactInfo = {},
  enquiryConfig = {},
}) {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  }

  const submitLabel = SUBMIT_LABELS[enquiryType] || "SUBMIT";

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left info panel ── */}
        <div className={styles.infoPanel}>
          {enquiryConfig.badge && (
            <TagChip
              label={enquiryConfig.badge}
              bg="rgba(247,247,245,0.16)"
              color="rgba(255,255,255,0.7)"
            />
          )}
          <h2 className={styles.panelHeading}>Message Us</h2>
          {enquiryConfig.formDescription && (
            <p className={styles.panelDesc}>{enquiryConfig.formDescription}</p>
          )}

          {/* Contact details — labeled blocks with dividers */}
          <div className={styles.contactDetails}>
            {contactInfo.email && (
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Email Address</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={styles.contactValue}
                >
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Mobile Number</span>
                <span className={styles.contactValue}>{contactInfo.phone}</span>
              </div>
            )}
            {contactInfo.social?.length > 0 && (
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Social Media</span>
                <div className={styles.social}>
                  {contactInfo.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className={styles.formPanel}>
          {submitted ? (
            <div className={styles.successMsg}>
              <p className={styles.successText}>
                Thank you! We&apos;ve received your submission and will be in
                touch soon.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {enquiryType === "enrolment" && (
                <EnrolmentFields data={form} onChange={handleChange} />
              )}
              {enquiryType === "partnership" && (
                <PartnershipFields data={form} onChange={handleChange} />
              )}
              {enquiryType === "rsvp" && (
                <RSVPFields data={form} onChange={handleChange} />
              )}

              {/* Consent */}
              <label className={styles.consentRow}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className={styles.checkbox}
                  required
                />
                <span className={styles.consentText}>
                  You agree to be contacted by our team and to our{" "}
                  <a href="/privacy" className={styles.consentLink}>
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              {/* Submit row */}
              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitBtn}>
                  {submitLabel}
                </button>
                <button
                  type="submit"
                  className={styles.arrowBtn}
                  aria-label={submitLabel}
                >
                  <img src={arrowIcon} alt="" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
