import { jsPDF } from "jspdf";

export function downloadResume() {
  const doc = new jsPDF();
  const margin = 20;
  let y = 20;

  // Helper to add text and update Y position
  const addText = (text: string, fontSize: number, isBold: boolean = false, align: "left" | "center" = "left", increment: number = 6) => {
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    doc.setFontSize(fontSize);
    if (align === "center") {
      doc.text(text, 105, y, { align: "center" });
    } else {
      // Handle text wrapping
      const lines = doc.splitTextToSize(text, 170);
      doc.text(lines, margin, y);
      increment = lines.length * (fontSize * 0.4) + 2;
    }
    y += increment;
  };

  const addSectionHeader = (title: string) => {
    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title, margin, y);
    y += 2;
    doc.setLineWidth(0.5);
    doc.line(margin, y, 190, y);
    y += 6;
  };

  // Header
  addText("KARTIK PATEL", 20, true, "center", 8);
  addText("Full Stack Developer — MERN Stack Specialist", 12, false, "center", 6);
  addText("+91-8401884854 — kartikpatel0406@gmail.com — linkedin.com/in/kartik-patel-2b6374268", 10, false, "center", 5);
  addText("Gandhinagar, Gujarat, India", 10, false, "center", 10);

  // Summary
  addSectionHeader("PROFESSIONAL SUMMARY");
  addText("Results-driven Full Stack Developer specializing in MERN stack with proven experience building scalable web applications. Demonstrated expertise in React.js, Node.js, MongoDB, and Express.js through production-level e-commerce platform development. Strong foundation in modern web technologies, cloud deployment (Vercel), media optimization (Cloudinary, ImageKit), and Agile methodologies. Passionate about creating efficient, user-centric solutions with clean, maintainable code.", 10);

  // Technical Skills
  addSectionHeader("TECHNICAL SKILLS");
  addText("Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design, UI/UX Implementation", 10);
  addText("Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Session Management", 10);
  addText("Database: MongoDB, Mongoose, Database Design, Query Optimization", 10);
  addText("DevOps & Tools: Git, GitHub, Vercel, Cloudinary, ImageKit, Agile/Scrum", 10);
  addText("Payment Integration: Stripe API, QR-based Payment Systems", 10);
  addText("Other: Data Structures, Algorithms, System Design, Version Control, API Development", 10);

  // Experience
  addSectionHeader("PROFESSIONAL EXPERIENCE");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Web Developer Intern", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text("March 2025 - June 2025", 190, y, { align: "right" });
  y += 5;
  doc.setFont("helvetica", "italic");
  doc.text("Zidio Development, Bengaluru, Karnataka (Remote)", margin, y);
  y += 6;
  
  const bullets = [
    "Architected and deployed full-stack e-commerce platform using MERN stack, handling 1000+ product catalog with dynamic filtering and search capabilities",
    "Implemented secure JWT-based authentication system with encrypted password storage, reducing unauthorized access attempts by 100%",
    "Integrated Stripe payment gateway and QR-based payment solutions, improving checkout conversion rate and transaction efficiency by 40%",
    "Developed comprehensive admin dashboard with CRUD operations for products, orders, users, and coupon management, streamlining business operations",
    "Built RESTful APIs with Express.js and MongoDB, optimizing query performance for 30% faster data retrieval",
    "Designed responsive React components with category-based filtering, enhancing user experience across mobile and desktop devices",
    "Collaborated in Agile team using Git for version control, participating in code reviews and sprint planning",
    "Leveraged Cloudinary and ImageKit for optimized media delivery, reducing page load times by 35%"
  ];

  bullets.forEach(bullet => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(`• ${bullet}`, 165);
    doc.text(lines, margin + 5, y);
    y += lines.length * 4.5 + 1;
  });

  // Projects
  addSectionHeader("KEY PROJECTS");
  
  const addProject = (name: string, tech: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(name, margin, y);
    doc.setFont("helvetica", "italic");
    doc.text(tech, 190, y, { align: "right" });
    y += 6;
  };

  addProject("Superhero E-Commerce Platform", "MERN Stack, Stripe, Cloudinary");
  addProject("Car Rental System", "MERN Stack, ImageKit");
  addProject("Social Media Web Application", "MERN Stack, ImageKit, Clerk, Inngest");

  // Education
  addSectionHeader("EDUCATION");
  
  const addEdu = (degree: string, school: string, dates: string, gpa: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(degree, margin, y);
    doc.setFont("helvetica", "normal");
    doc.text(dates, 190, y, { align: "right" });
    y += 5;
    doc.setFont("helvetica", "italic");
    doc.text(school, margin, y);
    doc.setFont("helvetica", "normal");
    doc.text(gpa, 190, y, { align: "right" });
    y += 7;
  };

  addEdu("Bachelor of Technology in Computer Engineering", "Institute of Advanced Research, Gandhinagar", "2022 - 2025", "GPA: 7.51");
  addEdu("Diploma in Computer Engineering", "Government Polytechnic Gandhinagar", "2019 - 2022", "GPA: 8.24");

  // Leadership
  addSectionHeader("LEADERSHIP & VOLUNTEER EXPERIENCE");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("BAPS Volunteer", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" - Active community service and organizational leadership", margin + 30, y);

  // Save the PDF
  doc.save("Kartik_Patel_Resume.pdf");
}
