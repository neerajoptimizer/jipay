// Policy pages served at /policies/[slug]. Review with your legal advisor before publishing.
import { site } from "@/lib/content";

export type PolicyBlock = string | { list: string[] };

export type Policy = {
  slug: string;
  title: string;
  short: string;
  description: string;
  sections: { heading: string; blocks: PolicyBlock[] }[];
};

export const policyUpdated = "22 October 2026";

const contactLine = `You can reach us on Telegram at ${site.telegramHandle} or by email at ${site.email}.`;

export const policies: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    short: "Privacy",
    description: `How ${site.name} collects, uses, shares and protects your personal and business information.`,
    sections: [
      {
        heading: "Introduction",
        blocks: [
          `${site.legalName} ("${site.name}", "we", "us") respects your privacy. This Privacy Policy explains how we handle information when you visit our website, contact us on Telegram or other channels, or use our payment gateway solution services.`,
          "We process personal data in line with applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.",
        ],
      },
      {
        heading: "Information we collect",
        blocks: [
          {
            list: [
              "Contact details — name, phone number, email address and Telegram username.",
              "Business details — business name, type, website or app, expected volumes and payment needs.",
              "KYC documents — such as PAN, GST certificate, business registration proof, bank account details and identity proof of authorised signatories.",
              "Communication records — messages you send us on Telegram, email or other channels.",
              "Technical data — IP address, browser type, device information and pages visited, collected through cookies and similar technologies.",
            ],
          },
        ],
      },
      {
        heading: "How we use your information",
        blocks: [
          {
            list: [
              "To understand your requirements and recommend suitable payment gateway solutions.",
              "To complete onboarding and KYC with our payment gateway, banking and network partners.",
              "To provide support, respond to queries and send service-related updates.",
              "To prevent fraud, money laundering and misuse of our services.",
              "To comply with legal, regulatory and partner requirements.",
              "To improve our website and services.",
            ],
          },
        ],
      },
      {
        heading: "Sharing of information",
        blocks: [
          "We do not sell or rent your personal information. We share it only where needed to deliver our services or comply with law:",
          {
            list: [
              "With RBI-authorised payment aggregators, payment gateways, banks and network partners for onboarding, KYC and account activation — with your consent.",
              "With service providers who help us run our business (such as hosting and communication tools), under confidentiality obligations.",
              "With government, regulatory or law-enforcement authorities when required by law.",
            ],
          },
        ],
      },
      {
        heading: "Data security",
        blocks: [
          "We use reasonable technical and organisational safeguards, including encrypted (SSL/TLS) connections and restricted access, to protect your information. Card and payment data is processed only by PCI DSS compliant partners — we do not store your customers' card details.",
        ],
      },
      {
        heading: "Data retention",
        blocks: [
          "We keep your information only as long as needed for the purposes above, or as required by law. KYC and transaction-related records may be retained for the period required under the Prevention of Money Laundering Act, 2002 and related rules.",
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, and you may withdraw consent at any time. Withdrawing consent may mean we can no longer provide some services, and some data may need to be kept for legal reasons.",
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          "Our website may use cookies to remember preferences and understand how visitors use the site. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Changes to this policy",
        blocks: ["We may update this policy from time to time. The latest version will always be available on this page with the updated date."],
      },
      {
        heading: "Contact us",
        blocks: [`For privacy questions or requests, contact ${site.grievanceOfficer}. ${contactLine}`],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    short: "Terms",
    description: `The terms that apply when you use the ${site.name} website and payment gateway solution services.`,
    sections: [
      {
        heading: "Acceptance of terms",
        blocks: [
          `By accessing this website or using the services of ${site.legalName} ("${site.name}"), you agree to these Terms & Conditions. If you do not agree, please do not use our website or services.`,
        ],
      },
      {
        heading: "Our services",
        blocks: [
          `${site.name} helps businesses obtain and integrate domestic and international payment gateway solutions through its network of partners. Payment processing and settlement are carried out by RBI-authorised payment aggregators, payment gateways and banks ("Partners"), whose own terms also apply to your account.`,
        ],
      },
      {
        heading: "Eligibility",
        blocks: [
          "You must be at least 18 years old and legally able to enter into a contract, and you must be authorised to act for the business you represent.",
        ],
      },
      {
        heading: "Your responsibilities",
        blocks: [
          {
            list: [
              "Provide true, accurate and complete information and documents.",
              "Operate only lawful businesses and not use any payment solution for prohibited or restricted activities.",
              "Comply with the terms, policies and risk guidelines of the Partner whose services you use.",
              "Keep your API keys, dashboard logins and credentials confidential.",
              "Inform us promptly of any change in your business details.",
            ],
          },
        ],
      },
      {
        heading: "Approvals and onboarding",
        blocks: [
          "Account approval, limits, pricing and settlement cycles are decided by the Partner based on its risk and compliance review. Onboarding timelines shared by us are estimates and are not guaranteed.",
        ],
      },
      {
        heading: "Fees",
        blocks: [
          "Applicable fees, charges and taxes will be shared with you before onboarding. Transaction charges (MDR) are levied as agreed with the respective Partner.",
        ],
      },
      {
        heading: "Suspension and termination",
        blocks: [
          "We or our Partners may suspend or terminate services if there is a breach of these terms, suspected fraud, regulatory instruction or risk concern. You may stop using our services at any time.",
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          `The ${site.name} name, logo and website content belong to ${site.legalName}. Other names and marks belong to their respective owners.`,
        ],
      },
      {
        heading: "Limitation of liability",
        blocks: [
          `To the maximum extent permitted by law, ${site.name} is not liable for indirect, incidental or consequential losses, or for any delay, failure or decision made by a Partner, bank or network. Our total liability is limited to the fees you paid us for the relevant service.`,
        ],
      },
      {
        heading: "Indemnity",
        blocks: [
          `You agree to indemnify ${site.name} against claims, losses and penalties arising from your breach of these terms, misuse of services or violation of law.`,
        ],
      },
      {
        heading: "Governing law",
        blocks: ["These terms are governed by the laws of India, and courts in India shall have jurisdiction over any disputes."],
      },
      {
        heading: "Changes and contact",
        blocks: [`We may update these terms at any time; continued use means you accept the updated terms. ${contactLine}`],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund & Cancellation Policy",
    short: "Refunds",
    description: `How refunds and cancellations work for ${site.name} services and for payments made through our partner gateways.`,
    sections: [
      {
        heading: "Scope",
        blocks: [
          `This policy covers fees paid to ${site.name} for our services. Refunds for purchases your customers make through a payment gateway are handled by you (the merchant) through the Partner's dashboard or API, as described below.`,
        ],
      },
      {
        heading: "Cancellation",
        blocks: [
          `You may cancel a service request at any time before onboarding work starts by messaging us on Telegram (${site.telegramHandle}) or emailing ${site.email}. Once an application has been submitted to a Partner, the request can still be withdrawn, but fees may not be fully refundable.`,
        ],
      },
      {
        heading: "Eligible refunds",
        blocks: [
          {
            list: [
              "Full refund if you cancel before we begin work on your request.",
              `Full refund if ${site.name} is unable to provide the agreed service for reasons attributable to us.`,
              "Duplicate or excess payments made to us by mistake.",
            ],
          },
        ],
      },
      {
        heading: "Non-refundable cases",
        blocks: [
          {
            list: [
              "After your account has been approved and activated by a Partner.",
              "If an application is rejected due to incorrect, incomplete or false information or documents, or because the business falls in a prohibited category.",
              "Charges levied by Partners, banks or networks, including transaction fees (MDR) and taxes.",
            ],
          },
        ],
      },
      {
        heading: "Refund process and timeline",
        blocks: [
          "Approved refunds are credited to the original payment method within 7–10 working days. The time it takes to reflect in your account depends on your bank.",
        ],
      },
      {
        heading: "Customer transaction refunds",
        blocks: [
          "If your customer requests a refund for a purchase, you can initiate it from your payment gateway dashboard or API. Refund timelines for customers are set by the Partner and the issuing bank, typically 5–7 working days. Chargebacks and disputes are handled under the Partner's chargeback policy.",
        ],
      },
      {
        heading: "Contact",
        blocks: [contactLine],
      },
    ],
  },
  {
    slug: "kyc-aml-policy",
    title: "KYC & AML Policy",
    short: "KYC & AML",
    description: `${site.name}'s Know Your Customer and Anti-Money Laundering commitments.`,
    sections: [
      {
        heading: "Our commitment",
        blocks: [
          `${site.name} is committed to preventing money laundering, terrorist financing and fraud. We work only with RBI-authorised Partners and support them in meeting their obligations under the Prevention of Money Laundering Act, 2002 (PMLA), its rules and RBI guidelines.`,
        ],
      },
      {
        heading: "Know Your Customer (KYC)",
        blocks: [
          "Every merchant must complete KYC before going live. This typically includes:",
          {
            list: [
              "PAN of the business and authorised signatories.",
              "Business registration proof — GST certificate, incorporation certificate, partnership deed or shop establishment certificate.",
              "Bank account proof — cancelled cheque or bank statement in the business name.",
              "Identity and address proof of directors, partners or proprietor.",
              "A live website or app with clear product details, pricing, contact information and policies.",
            ],
          },
          "Partners may request additional documents or perform video KYC, site visits or other checks.",
        ],
      },
      {
        heading: "Prohibited and restricted businesses",
        blocks: [
          "We do not support businesses that are illegal or prohibited by Partners, card networks or regulators — including but not limited to unlicensed financial services, illegal betting, counterfeit goods, narcotics, weapons and adult content. Some categories need additional approvals.",
        ],
      },
      {
        heading: "Monitoring and reporting",
        blocks: [
          "Transactions are monitored by our Partners for unusual or suspicious activity. Suspicious activity may be reported to the Financial Intelligence Unit – India (FIU-IND) or other authorities as required by law, and accounts may be suspended pending review.",
        ],
      },
      {
        heading: "Record keeping",
        blocks: ["KYC and transaction records are retained for the period required under PMLA and applicable regulations."],
      },
      {
        heading: "Right to refuse",
        blocks: [`${site.name} and its Partners may decline or close any account that does not meet KYC or risk requirements.`],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    short: "Disclaimer",
    description: `Important information about the content on the ${site.name} website.`,
    sections: [
      {
        heading: "General information",
        blocks: [
          `The content on this website is for general information only. While we try to keep it accurate and up to date, ${site.name} makes no warranties about its completeness or accuracy.`,
        ],
      },
      {
        heading: "No guarantee of approval",
        blocks: [
          "Account approval, pricing, limits and settlement timelines are decided by our Partners after their own review. Figures shown on this website — such as onboarding times and success rates — are indicative and not a guarantee.",
        ],
      },
      {
        heading: "Third-party services",
        blocks: [
          "Payment processing is provided by third-party Partners. We are not responsible for their services, downtime or decisions, which are governed by their own terms and policies.",
        ],
      },
      {
        heading: "Images and trademarks",
        blocks: [
          "Images on this website are for illustration only. Any third-party names or marks belong to their respective owners and do not imply endorsement.",
        ],
      },
      {
        heading: "Contact",
        blocks: [contactLine],
      },
    ],
  },
  {
    slug: "grievance-redressal",
    title: "Grievance Redressal",
    short: "Grievances",
    description: `How to raise a complaint with ${site.name} and how we resolve it.`,
    sections: [
      {
        heading: "Raising a grievance",
        blocks: [
          "If you are unhappy with our service, please contact us with your name, business name, registered phone or email, and a short description of the issue (with transaction or reference IDs if any):",
          {
            list: [
              `Telegram: ${site.telegramHandle}`,
              `Email: ${site.email}`,
            ],
          },
        ],
      },
      {
        heading: "Timelines",
        blocks: [
          {
            list: [
              "Acknowledgement within 48 hours.",
              "Resolution within 7 working days for most issues.",
              "Issues involving a Partner or bank may take longer; we will keep you updated.",
            ],
          },
        ],
      },
      {
        heading: "Escalation",
        blocks: [
          `If your issue is not resolved satisfactorily, you can escalate it to our Grievance Officer: ${site.grievanceOfficer}, ${site.address}. Email: ${site.email}.`,
          "For complaints about a payment processed by a Partner, you may also use the Partner's grievance redressal mechanism and, where applicable, the RBI Integrated Ombudsman Scheme.",
        ],
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}
