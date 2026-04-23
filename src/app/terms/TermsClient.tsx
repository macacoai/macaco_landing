"use client";

import LegalPage from "@/components/LegalPage";
import { useCopy } from "@/lib/LanguageContext";

export default function TermsClient() {
  const c = useCopy();
  return <LegalPage data={c.legal.terms} />;
}
