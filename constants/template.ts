export const templates = [
  {
    id: "blank",
    label: "Blank",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Development Proposal</h1>
    <p><strong>Prepared by:</strong> Alex Martinez, Project Manager</p>
    <p><strong>Company:</strong> Visionary Tech Solutions</p>
    <p><strong>Date:</strong> April 23, 2025</p><h2>Executive Summary</h2>
<p>This proposal outlines a comprehensive plan for developing a custom web-based software platform to optimize operations, enhance scalability, and improve user experience for your organization.</p>
<h2>Objectives</h2>
<ul>
  <li>Develop a scalable, modular web application using modern frameworks</li>
  <li>Integrate robust analytics and reporting features</li>
  <li>Ensure cross-platform compatibility and responsive UI/UX</li>
  <li>Implement secure authentication and user role management</li>
</ul>
<h2>Proposed Technologies</h2>
<ul>
  <li>Frontend: React.js, Tailwind CSS</li>
  <li>Backend: Node.js with Express</li>
  <li>Database: PostgreSQL</li>
  <li>Hosting: AWS / Vercel</li>
</ul>
<h2>Timeline</h2>
<ul>
  <li>Phase 1 - Requirements & Design: 2 weeks</li>
  <li>Phase 2 - Development: 6 weeks</li>
  <li>Phase 3 - Testing & Deployment: 2 weeks</li>
</ul>

    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
        <h1>Business Letter<h1>
        <p><strong>From:</strong> John Smith </p>
        <p><strong>To:</strong> Jane Doe, Manager</p>
        <p><strong>Date:</strong>April 23, 2025</p>
        <p>Dear Ms. Doe,</p>
        <p>I am writing to express my sincere interest in establishing a collaborative business partnership between our firms. I believe our mutual interests align closely, and I would appreciate the opportunity to discuss how might we work together productively.</p>
        <p>Looking forward to your response.</p>
        <p>Sincerely, <br/> John Smith </p>
        `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <strong>Name:</strong> David Clarke<br/>
    <strong>Email:</strong> david@example.com<br/>
    <strong>Phone:</strong> (123) 456-7890
    <strong>Professional Summary:</strong>
    <p>Dynamic software engineer with 5+ years of experience building scalable web applications and leading teams to deliver high-quality code.</p>
    <strong>Experience:</strong>
      <ul>
        <li>Senior Developer, TechCorp (2020-Present)</li>
        <li>Frontend Engineer, Webify (2017-2020)</li>
      </ul>
      <strong>Education:</strong>
      <p>B.Sc. in Computer Science, University of California</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h2>Letter</h2>
    <p class="info"><strong>Sender:</strong> Emily Johnson</p>
    <p class="info"><strong>Recipient:</strong> Alex Brown</p>
    <p class="info"><strong>Date:</strong> April 23, 2025</p>
    <p>Dear Alex,</p>
    <p>I hope this letter finds you well. I wanted to reach out and share some recent updates and thoughts with you. Life has been moving quickly, and I've been reflecting a lot on our last conversation.</p>
    <p>Hope to catch up soon!</p>
    <p>Warm regards,<br/>Emily</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <strong>Full Name:</strong> Sarah Bennett<br/>
    <strong>Contact:</strong> sarah.b@example.com | +1 987-654-3210
    <strong>Research Interests:</strong>
      <p>Artificial Intelligence, Human-Computer Interaction, and Ethical Computing</p>
    <strong>Publications:</strong>
      <ul>
        <li>"Machine Learning Ethics," Journal of AI Research, 2023</li>
        <li>"UX in Healthcare Systems," ACM CHI Proceedings, 2022</li>
      </ul>
    <strong>Academic Background:</strong>
      <p>Ph.D. in Computer Science, MIT</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Manager</h1>
    <p><strong>Prepared by:</strong> Alex Martinez, Project Manager</p>
    <p><strong>Company:</strong> Visionary Tech Solutions</p>
    <p><strong>Date:</strong> April 23, 2025</p><h2>Executive Summary</h2>
<p>This proposal outlines a comprehensive plan for developing a custom web-based software platform to optimize operations, enhance scalability, and improve user experience for your organization.</p>

<h2>Objectives</h2>
<ul>
  <li>Develop a scalable, modular web application using modern frameworks</li>
  <li>Integrate robust analytics and reporting features</li>
  <li>Ensure cross-platform compatibility and responsive UI/UX</li>
  <li>Implement secure authentication and user role management</li>
</ul>

<h2>Proposed Technologies</h2>
<ul>
  <li>Frontend: React.js, Tailwind CSS</li>
  <li>Backend: Node.js with Express</li>
  <li>Database: PostgreSQL</li>
  <li>Hosting: AWS / Vercel</li>
</ul>

<h2>Timeline</h2>
<ul>
  <li>Phase 1 - Requirements & Design: 2 weeks</li>
  <li>Phase 2 - Development: 6 weeks</li>
  <li>Phase 3 - Testing & Deployment: 2 weeks</li>
</ul>

<h2>Cost Estimate</h2>
<p>Estimated total cost for the 10-week project is $25,000 USD, inclusive of development, testing, and initial deployment services.</p>

<h2>Conclusion</h2>
<p>We are confident that this proposal addresses your business needs and delivers an innovative and reliable solution. We welcome the opportunity to discuss this in further detail and refine the proposal to meet your specific goals.</p>

<p><strong>Contact:</strong><br>
Alex Martinez<br>
Project Manager<br>
alex@visionarytech.com | (123) 456-7890</p>
    `,
  },
];
