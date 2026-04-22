"use client";

import { useState } from "react";
import { useCopy } from "@/lib/LanguageContext";

interface FormData {
  email: string;
  testing_tool: string;
  operating_system: string;
  behind_vpn: string;
}

interface Props {
  onSuccess: () => void;
}

export default function BetaAccessForm({ onSuccess }: Props) {
  const c = useCopy();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    testing_tool: "",
    operating_system: "",
    behind_vpn: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.macaco.ai/api/v1/qa-beta-access/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
      } else {
        setError(c.form.errorGeneric);
      }
    } catch {
      setError(c.form.errorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "44px",
    padding: "0 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.32)",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
    color: "#fff",
    fontFamily: "var(--font-inter)",
    fontSize: "15px",
    lineHeight: "normal",
    outline: "none",
    boxSizing: "border-box",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    paddingRight: "40px",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='5 8 10 13 15 8'/></svg>\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    backgroundSize: "16px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-inter)",
    fontWeight: 500,
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    marginBottom: "8px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "480px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>{c.form.labelEmail}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
          placeholder={c.form.placeholderEmail}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>{c.form.labelTool}</label>
        <select
          name="testing_tool"
          value={formData.testing_tool}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="" disabled>{c.form.placeholderTool}</option>
          <option value="selenium">Selenium</option>
          <option value="cypress">Cypress</option>
          <option value="playwright">Playwright</option>
          <option value="testcafe">TestCafe</option>
          <option value="puppeteer">Puppeteer</option>
          <option value="manual">{c.form.optionToolManual}</option>
          <option value="other">{c.form.optionToolOther}</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>{c.form.labelOS}</label>
        <select
          name="operating_system"
          value={formData.operating_system}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="" disabled>{c.form.placeholderOS}</option>
          <option value="windows">Windows</option>
          <option value="mac">MacOS</option>
          <option value="linux">Linux</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={labelStyle}>{c.form.labelVPN}</label>
        <select
          name="behind_vpn"
          value={formData.behind_vpn}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="" disabled>{c.form.placeholderVPN}</option>
          <option value="no">{c.form.optionVPNNo}</option>
          <option value="yes">{c.form.optionVPNYes}</option>
          <option value="some">{c.form.optionVPNSome}</option>
          <option value="not_sure">{c.form.optionVPNNotSure}</option>
        </select>
      </div>

      {error && (
        <div className="text-red-300 text-sm bg-red-500/10 border border-red-500/30 p-3 rounded-lg mb-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          width: "100%",
          padding: "14px 24px",
          borderRadius: "12px",
          border: 0,
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "8px",
        }}
      >
        {isSubmitting ? c.form.submitting : c.form.submit}
      </button>
    </form>
  );
}
