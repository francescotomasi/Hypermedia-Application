/*
DATABASE INITIALIZATION
DO NOT RUN MULTIPLE TIMES
 */

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // TestimonialPerson INIT
    // await prisma.testimonialPerson.createMany({
    //     data: [
    //         {id: 101, name: 'Maria G.'},
    //         {id: 102, name: 'Elena P.'},
    //         {id: 103, name: 'Giulia R.'},
    //         {id: 104, name: 'Lucia M.'},
    //         {id: 105, name: 'Sophia T.'},
    //         {id: 106, name: 'Francesca D.'},
    //         {id: 107, name: 'Anna B.'},
    //         {id: 108, name: 'Laura V.'},
    //         {id: 109, name: 'Maria S.'},
    //         {id: 110, name: 'Maria L.'},
    //         {id: 111, name: 'Elena P.'},
    //         {id: 112, name: 'Giulia R.'},
    //         {id: 113, name: 'Laura B.'},
    //         {id: 114, name: 'Sara T.'},
    //         {id: 115, name: 'Alessandra M.'},
    //         {id: 116, name: 'Francesca L.'},
    //         {id: 117, name: 'Marta G.'},
    //         {id: 118, name: 'Isabella P.'}
    //     ]
    // })

    // Person INIT
    // await prisma.person.createMany({
    //     data: [
    //         {
    //             id: 1,
    //             name: "Dr. Enrico BIanchi",
    //             description: "Experienced Clinical Psychologist with over 10 years of expertise in diagnosing and treating mental health issues. Proficient in cognitive-behavioral therapy, psychoanalysis, and developing personalized treatment plans for patients. Strong background in both inpatient and outpatient settings.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 2,
    //             name: "Dr. Jane Doe",
    //             description: "Dedicated Child Psychologist with 8 years of experience in providing therapeutic services to children and adolescents. Specializes in developmental psychology, play therapy, and family counseling. Committed to supporting young clients in overcoming emotional and behavioral challenges.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 3,
    //             name: "Dr. Mohamed Rabas",
    //             description: "Accomplished Forensic Psychologist with 12 years of experience in criminal and civil cases. Expert in psychological evaluations, competency assessments, and expert witness testimony. Known for providing thorough and objective analyses in legal contexts.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 4,
    //             name: "Dr. Emma Rizzi",
    //             description: "Health Psychologist with 9 years of experience in promoting physical health through psychological principles. Expertise in behavioral medicine, chronic illness management, and health behavior change. Dedicated to improving patient outcomes through evidence-based interventions.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 5,
    //             name: "Dr. Lucia Moretti",
    //             description: "Dedicated Clinical Psychologist with over 12 years of experience in providing therapeutic services and emotional support to women experiencing violence and family maltreatment. Specializes in trauma-informed care, cognitive-behavioral therapy, and crisis intervention.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 6,
    //             name: "Dr. Marco Conti",
    //             description: "Compassionate Counseling Psychologist with 10 years of experience providing emotional and psychological support to women dealing with family maltreatment and domestic violence. Expertise in humanistic therapy, family counseling, and stress management.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 7,
    //             name: "Dr. Elena Ricci",
    //             description: "Experienced Health Psychologist with over 8 years of expertise in providing therapeutic services and emotional support to women facing violence and family maltreatment. Specialized in mindfulness-based stress reduction, trauma therapy, and health behavior change.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 8,
    //             name: "Avv. Maria Rossi",
    //             description: "Dedicated Legal Advisor with over 15 years of experience in providing comprehensive legal support and advocacy for women facing domestic violence and family maltreatment. Expert in family law, criminal law related to violence against women, and human rights.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 9,
    //             name: "Avv. Luigi Bianchi",
    //             description: "Experienced Legal Advisor with a robust background in providing legal assistance to women in crisis situations, particularly those affected by domestic violence and family maltreatment. Proficient in criminal defense, protective measures, and family law.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 10,
    //             name: "Anna Bianchi",
    //             description: "Experienced Case Manager with over 8 years of expertise in coordinating services and resources for women in crisis, particularly those affected by domestic violence and family maltreatment. Skilled in needs assessment, resource coordination, and individualized service planning.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 11,
    //             name: "Giovanni Cadorna",
    //             description: "Dedicated Case Manager with 10 years of experience in coordinating comprehensive support services for women facing domestic violence and family maltreatment. Expertise in client advocacy, crisis management, and inter-agency collaboration.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 12,
    //             name: "Sofia Russo",
    //             description: "Proactive Case Manager with over 7 years of experience in supporting women through coordinating essential services and resources. Specialized in crisis intervention, holistic care planning, and empowering women to regain control over their lives.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 13,
    //             name: "Laura Verdi",
    //             description: "Detail-oriented Administrative Assistant with over 7 years of experience managing day-to-day operations in a non-profit setting. Proficient in scheduling, data management, and communication, ensuring efficient and smooth administrative functions.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 14,
    //             name: "Marco Lanza",
    //             description: "Experienced Administrative Coordinator with over 10 years of experience in managing administrative functions within non-profit organizations. Expertise in data management, scheduling, and enhancing internal communication to support efficient operations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 15,
    //             name: "Giulia Romano",
    //             description: "Compassionate Registered Nurse with over 10 years of experience in providing medical care and health education in clinical and non-profit settings. Skilled in patient assessment, wound care, and health education, with a focus on supporting women in crisis.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 16,
    //             name: "Andrea Esposito",
    //             description: "Dedicated Healthcare Worker with over 8 years of experience in providing medical care and health education in non-profit organizations. Specializes in preventive health, patient education, and supporting women in vulnerable situations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 17,
    //             name: "Sara Ascoli",
    //             description: "Dedicated Childcare Worker with over 8 years of experience providing nurturing care and creating safe environments for children. Skilled in early childhood education, behavioral management, and fostering emotional and social development.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 18,
    //             name: "Luca Verdi",
    //             description: "Caring and responsible Childcare Worker with 6 years of experience in providing high-quality care for children. Specializes in creating safe and stimulating environments that support children’s physical, emotional, and social well-being.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 19,
    //             name: "Sofia Esposito",
    //             description: "Nurturing and skilled Childcare Worker with over 9 years of experience in providing care for children. Expertise in early childhood education, creating engaging activities, and ensuring a safe and supportive environment for children.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 20,
    //             name: "Elena Ferri",
    //             description: "Experienced Social Worker with over 10 years of experience providing support and navigating social services for individuals in need. Specializes in assisting women affected by domestic violence and family maltreatment.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 21,
    //             name: "Matteo Ricci",
    //             description: "Compassionate Social Worker with 8 years of experience in supporting individuals through social services navigation and personalized assistance. Expertise in crisis intervention, resource coordination, and advocacy for women in difficult situations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //     ]
    // })

    // Experience INIT
    // await prisma.experience.createMany({
    //     data: [
    //         {personId: 1, title: "Senior Clinical Psychologist", location: "XYZ Mental Health Center, Milano, MI", time: "January 2015 - Present", description: "Conduct psychological assessments and diagnoses.\nDevelop and implement individualized treatment plans.\nProvide psychotherapy for individuals, couples, and families.\nSupervise and mentor junior psychologists and interns."},
    //         {personId: 1, title: "Clinical Psychologist", location: "ABC Hospital, Milano, MI", time: "June 2010 - December 2014", description: "Administered psychological tests and interpreted results.\nConducted individual and group therapy sessions.\nParticipated in multidisciplinary treatment team meetings."},
    //         {personId: 2, title: "Child Psychologist", location: "Sunshine Children’s Hospital, Milano, MI", time: "March 2015 - Present", description: "Conduct psychological evaluations of children and adolescents.\nImplement play therapy and cognitive-behavioral techniques.\nCollaborate with families and schools to create supportive environments."},
    //         {personId: 2, title: "Child Therapist", location: "Happy Minds Therapy Center, Pavia, PV", time: "September 2012 - February 2015", description: "Provided individual and group therapy for children.\nAddressed issues such as anxiety, depression, and ADHD.\nDeveloped treatment plans and monitored progress."},
    //         {personId: 3, title: "Forensic Psychologist", location: "State Forensic Services, Milano, MI", time: "August 2008 - Present", description: "Conduct forensic evaluations for criminal and civil cases.\nAssess competency to stand trial and criminal responsibility.\nProvide expert witness testimony in court."},
    //         {personId: 3, title: "Consulting Forensic Psychologist", location: "Private Practice, New York, NY", time: "January 2012 - Present", description: "Offer consultations to attorneys on psychological aspects of cases.\nPerform custody evaluations and risk assessments.\nDevelop reports and provide testimony."},
    //         {personId: 4, title: "Health Psychologist", location: "Wellness Health Center, Milano, MI", time: "January 2012 - Present", description: "Conduct behavioral assessments and develop treatment plans.\nProvide counseling for patients with chronic illnesses.\nImplement health promotion and disease prevention programs."},
    //         {personId: 4, title: "Behavioral Medicine Specialist", location: "Hope Medical Clinic, Vicenza, VC", time: "July 2011 - December 2011", description: "Assisted patients in managing chronic pain and illness.\nConducted workshops on stress management and healthy living.\nCollaborated with medical staff to provide integrated care."},
    //         {personId: 5, title: "Clinical Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "March 2015 - Present", description: "Conduct individual and group therapy sessions for women affected by domestic violence.\nProvide crisis intervention and develop personalized treatment plans.\nFacilitate support groups and workshops focused on trauma recovery and empowerment."},
    //         {personId: 5, title: "Therapist", location: "Associazione Donne in Rete, Milan, Italy", time: "January 2010 - February 2015", description: "Offered emotional support and counseling services to women in shelters.\nCollaborated with social workers to provide holistic care.\nConducted psychological assessments and therapeutic interventions."},
    //         {personId: 6, title: "Counseling Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "April 2016 - Present", description: "Provide individual counseling sessions to women in crisis.\nFacilitate family counseling and mediation sessions.\nDevelop and conduct stress management and resilience-building workshops."},
    //         {personId: 6, title: "Counselor", location: "Fondazione Aiuto Donna, Rome, Italy", time: "June 2011 - March 2016", description: "Offered support and counseling to women in emergency situations.\nConducted workshops on self-esteem and empowerment.\nWorked with multidisciplinary teams to create comprehensive support plans."},
    //         {personId: 7, title: "Health Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "January 2017 - Present", description: "Offer individual and group therapy focusing on trauma recovery.\nImplement mindfulness-based stress reduction programs.\nProvide health behavior change counseling and wellness planning."},
    //         {personId: 7, title: "Therapist", location: "Associazione Aiuto Donna, Florence, Italy", time: "May 2012 - December 2016", description: "Provided therapeutic services to women in domestic violence shelters.\nDeveloped and facilitated trauma-informed care workshops.\nConducted psychological evaluations and created individualized care plans."},
    //         {personId: 8, title: "Senior Legal Advisor", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "January 2015 - Present", description: "Provide legal counsel and representation for women victims of violence.\nAssist clients in understanding their legal rights and options.\nWork with local authorities and social services to ensure comprehensive support."},
    //         {personId: 8, title: "Legal Consultant", location: "Associazione Difesa Donne, Milan, Italy", time: "June 2010 - December 2014", description: "Offered legal advice on issues related to family law and protection orders.\nConducted workshops on legal rights and self-defense for women.\nCollaborated with psychologists and social workers to develop support plans."},
    //         {personId: 8, title: "Family Law Attorney", location: "Studio Legale Rossi, Milan, Italy", time: "January 2005 - May 2010", description: "Specialized in cases of domestic violence and child custody disputes.\nRepresented clients in court and mediation sessions.\nDrafted legal documents such as restraining orders and custody agreements."},
    //         {personId: 9, title: "Legal Advisor", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2016 - Present", description: "Offer legal consultations to women victims of violence.\nAssist clients in navigating legal procedures and obtaining protection orders.\nLiaise with law enforcement and social services to coordinate comprehensive support."},
    //         {personId: 9, title: "Legal Advocate", location: "Associazione Difesa dei Diritti delle Donne, Rome, Italy", time: "July 2011 - January 2016", description: "Provided legal representation in cases of domestic violence.\nConducted legal rights education sessions for women in shelters.\nWorked closely with social workers to ensure holistic care for clients."},
    //         {personId: 9, title: "Criminal Defense Attorney", location: "Studio Legale Bianchi, Rome, Italy", time: "March 2005 - June 2011", description: "Defended clients in criminal cases, with a focus on domestic violence.\nPrepared legal briefs, motions, and case strategies.\nRepresented clients in court hearings and negotiations."},
    //         {personId: 10, title: "Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "March 2016 - Present", description: "Conduct comprehensive needs assessments for women in crisis.\nDevelop and implement individualized service plans.\nCoordinate with local agencies and service providers to ensure holistic support.\nMonitor and evaluate the progress of each client, adjusting plans as necessary."},
    //         {personId: 10, title: "Social Worker", location: "Associazione Casa delle Donne, Milan, Italy", time: "June 2012 - February 2016", description: "Provided case management and support services to women and children in shelters.\nAssisted clients in accessing community resources such as housing, healthcare, and legal assistance.\nFacilitated support groups and workshops on life skills and self-empowerment."},
    //         {personId: 11, title: "Senior Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2014 - Present", description: "Lead a team of case managers in providing support to women in crisis.\nDevelop and coordinate individualized care plans.\nFacilitate access to housing, legal, medical, and psychological services.\nConduct regular follow-ups to ensure the effectiveness of service delivery."},
    //         {personId: 11, title: "Case Coordinator", location: "Fondazione Aiuto Donna, Rome, Italy", time: "July 2009 - January 2014", description: "Managed cases for women and children in domestic violence shelters.\nCoordinated with local authorities, healthcare providers, and legal services.\nOrganized workshops and training sessions on resource utilization and self-sufficiency."},
    //         {personId: 12, title: "Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "April 2017 - Present", description: "Perform initial and ongoing needs assessments.\nCreate and manage individualized service plans.\nConnect clients with necessary resources, including housing, healthcare, and legal aid.\nProvide ongoing support and advocacy for clients."},
    //         {personId: 12, title: "Support Services Coordinator", location: "Associazione Aiuto e Speranza, Florence, Italy", time: "August 2013 - March 2017", description: "Coordinated support services for women and children in emergency shelters.\nOrganized community outreach programs to raise awareness of available services.\nFacilitated group sessions and workshops on empowerment and self-sufficiency."},
    //         {personId: 13, title: "Administrative Assistant", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "May 2017 - Present", description: "Handle scheduling and calendar management for the center’s activities.\nMaintain and update client databases and confidential records.\nCoordinate communication between staff, clients, and external partners.\nAssist in organizing events, workshops, and meetings."},
    //         {personId: 13, title: "Office Administrator", location: "Associazione Aiuto Donna, Milan, Italy", time: "June 2013 - April 2017", description: "Managed day-to-day office operations, including phone and email communication.\nScheduled appointments and managed the center's calendar.\nOrganized and maintained physical and electronic files.\nAssisted in preparing reports and documents for internal and external use."},
    //         {personId: 14, title: "Administrative Coordinator", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "January 2015 - Present", description: "Oversee the administrative operations, including scheduling and data management.\nCoordinate internal and external communications, ensuring timely information flow.\nManage client intake and maintain accurate and confidential records.\nSupport the planning and execution of events and programs."},
    //         {personId: 14, title: "Office Manager", location: "Fondazione Aiuto e Solidarietà, Rome, Italy", time: "March 2010 - December 2014", description: "Supervised daily office operations, including staff scheduling and task management.\nMaintained databases and ensured data integrity and confidentiality.\nFacilitated communication between departments and external stakeholders.\nOrganized and coordinated meetings, workshops, and training sessions."},
    //         {personId: 15, title: "Registered Nurse", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "April 2016 - Present", description: "Provide direct medical care to women affected by domestic violence.\nConduct health assessments and develop individualized care plans.\nEducate clients on health issues, self-care, and preventive measures.\nCollaborate with multidisciplinary teams to ensure comprehensive care."},
    //         {personId: 15, title: "Staff Nurse", location: "Ospedale San Raffaele, Milan, Italy", time: "January 2011 - March 2016", description: "Provided nursing care in a busy emergency department.\nAssisted in triage, patient assessment, and emergency interventions.\nEducated patients and families on post-discharge care and health maintenance.\nMaintained accurate medical records and ensured patient confidentiality."},
    //         {personId: 16, title: "Healthcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2017 - Present", description: "Provide basic medical care and first aid to women at the center.\nConduct health screenings and monitor vital signs.\nEducate clients on nutrition, hygiene, and preventive health measures.\nSupport healthcare professionals in delivering comprehensive care."},
    //         {personId: 16, title: "Community Health Worker", location: "Fondazione Salute e Benessere, Rome, Italy", time: "August 2013 - January 2017", description: "Provided health education and outreach services to underserved communities.\nAssisted in organizing health fairs and community health screenings.\nEducated individuals on chronic disease management and preventive health.\nCollaborated with local health agencies to connect clients with resources."},
    //         {personId: 17, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "June 2016 - Present", description: "Provide daily care and supervision for children of women at the center.\nDevelop and implement age-appropriate activities to promote learning and development.\nEnsure a safe and supportive environment for all children.\nCommunicate effectively with mothers to support their children’s needs."},
    //         {personId: 17, title: "Preschool Teacher Assistant", location: "Scuola dell'Infanzia Arcobaleno, Milan, Italy", time: "September 2012 - May 2016", description: "Assisted lead teachers in the classroom with educational and recreational activities.\nSupported children in developing social and cognitive skills.\nMaintained a clean and organized classroom environment.\nMonitored children's progress and reported to parents and teachers."},
    //         {personId: 18, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "January 2018 - Present", description: "Supervise and engage children in various activities to ensure their safety and well-being.\nPlan and organize educational and recreational activities.\nProvide emotional support and guidance to children.\nWork closely with mothers to address any concerns about their children."},
    //         {personId: 18, title: "After-School Program Coordinator", location: "Associazione Bambini Felici, Rome, Italy", time: "September 2015 - December 2017", description: "Coordinated and supervised after-school programs for elementary school children.\nDeveloped and implemented engaging activities focused on learning and development.\nManaged program logistics, including scheduling and communication with parents.\nEnsured the safety and well-being of all participants."},
    //         {personId: 19, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "March 2015 - Present", description: "Provide attentive and compassionate care to children of women at the center.\nDesign and implement educational and recreational activities.\nMonitor children's safety and well-being at all times.\nCommunicate with mothers to ensure their children’s needs are met."},
    //         {personId: 19, title: "Nursery School Assistant", location: "Asilo Nido Bimbi Sereni, Florence, Italy", time: "April 2011 - February 2015", description: "Assisted in caring for infants and toddlers in a nursery school setting.\nSupported children's development through interactive play and activities.\nMaintained a clean and organized environment.\nProvided regular updates to parents on their children’s progress."},
    //         {personId: 20, title: "Social Worker", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "February 2014 - Present", description: "Provide comprehensive support to women in crisis, helping them access social services and resources.\nConduct assessments to determine clients’ needs and develop individualized support plans.\nCollaborate with local agencies and service providers to ensure holistic support.\nOffer counseling and emotional support to clients."},
    //         {personId: 20, title: "Case Manager", location: "Associazione Aiuto Donna, Milan, Italy", time: "April 2010 - January 2014", description: "Managed cases for women and families in shelters.\nAssisted clients in accessing housing, healthcare, and legal assistance.\nConducted home visits and follow-ups to ensure the well-being of clients.\nFacilitated support groups and workshops on self-empowerment."},
    //         {personId: 21, title: "Social Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "May 2016 - Present", description: "Assist women in crisis by providing access to essential social services and resources.\nPerform comprehensive needs assessments and create tailored support plans.\nCoordinate with community organizations and government agencies to facilitate service delivery.\nOffer counseling and support to clients experiencing emotional and psychological distress."},
    //         {personId: 21, title: "Social Services Coordinator", location: "Fondazione Aiuto e Speranza, Rome, Italy", time: "September 2012 - April 2016", description: "Coordinated social services for families and individuals in need.\nConducted client intake interviews and assessments.\nDeveloped and monitored individualized service plans.\nProvided information and referrals to community resources and support programs."},
    //     ]
    // })

    // Project INIT
    // await prisma.project.createMany({
    //     data: [
    //         {id: 1, name: "EmpowerHer", description: "A Global Initiative for Empowerment and Change", longDes: "EmpowerHer is a grassroots initiative spearheaded by dedicated women activists and community leaders across various countries. The project is focused on empowering women and girls who have experienced gender-based violence, providing them with the tools and support they need to rebuild their lives. Through mentorship programs, skill-building workshops, and advocacy campaigns, EmpowerHer aims to create a strong network of support for survivors and to shift societal attitudes towards gender-based violence.", leaderId: 20},
    //         {id: 2, name: "Safe Haven", description: "A Sanctuary for Survivors of Domestic Violence", longDes: "Safe Haven is a collaborative initiative uniting local government agencies, non-governmental organizations (NGOs), and community organizations with a common goal: to provide safe housing and comprehensive support services to survivors of domestic violence. This project not only ensures a secure environment for survivors but also focuses on training law enforcement and healthcare professionals to better identify and respond to cases of gender-based violence.", leaderId: 14},
    //         {id: 3, name: "Women's Voices", description: "Empowering and Inspiring Through Shared Experiences", longDes: "Women's Voices: Inspiring Change is an annual event dedicated to providing a dynamic platform for influential and successful women to share their insights, experiences, and expertise on various issues affecting women and society. This project aims to inspire and empower individuals, particularly women, by showcasing the diverse achievements and perspectives of female leaders from different fields. Through engaging talks, panel discussions, and interactive sessions, the event fosters a spirit of resilience, leadership, and community among its participants.", leaderId: 8},
    //         {id: 4, name: "Justice for Women", description: "Ensuring Legal Representation and Access to Justice", longDes: "Justice for Women is a dedicated legal advocacy project focused on providing free legal representation to women and girls who have experienced gender-based violence. This project collaborates with pro bono lawyers, law clinics, and legal aid organizations to ensure that survivors have access to justice and can hold perpetrators accountable for their actions. By offering comprehensive legal support, Justice for Women empowers survivors to pursue justice and reclaim their lives with dignity.", leaderId: 8},
    //         {id: 5, name: "Healing Through Art", description: "Creative Expression for Recovery", longDes: "Healing Through Art is an innovative project designed to harness the therapeutic power of creative expression to aid in the recovery and healing process for women who have experienced violence and family maltreatment. This project offers a variety of art therapy programs, including painting, drawing, sculpture, and music therapy, led by professional art therapists and artists. By providing a safe space for creative exploration, Healing Through Art helps participants express their emotions, build self-esteem, and find a sense of peace and empowerment through artistic creation.", leaderId: 10},
    //     ]
    // })

    // Service INIT
    // await prisma.service.createMany({
    //     data: [
    //         {id: 1, name: "Legal Assistance", description: "Navigating Your Rights with Confidence", words: "Our Legal Assistance service is designed to empower women by providing comprehensive legal advice and support. We help women understand their rights and navigate the complexities of the legal system, ensuring they have the knowledge and resources needed to make informed decisions. Our team of experienced legal professionals offers guidance on a range of issues, including domestic violence, family law, and human trafficking, helping survivors to pursue justice and reclaim their lives."},
    //         {id: 2, name: "Emergency Shelter", description: "A Safe Haven in Times of Crisis", words: "Our Emergency Shelter service offers a secure and confidential refuge for women who are in immediate danger due to domestic violence, human trafficking, or other forms of abuse. The shelter provides a safe and supportive environment where women can find peace and stability while they plan their next steps. Our goal is to ensure that every woman feels safe, protected, and empowered to rebuild her life free from fear."},
    //         {id: 3, name: "Group Therapy", description: "Healing Together in a Supportive Community", words: "Our Group Therapy service offers a safe and nurturing space where women can come together to share their experiences, support one another, and find healing in a community setting. Facilitated by experienced therapists, these support groups are designed to help women who have experienced gender-based violence, domestic abuse, or other forms of trauma. Through group therapy, participants can connect with others who understand their struggles, gain new perspectives, and build resilience together."},
    //         {id: 4, name: "Childcare Services", description: "Providing a Safe and Nurturing Environment for Your Children", words: "Our Childcare Services are designed to support women who are utilizing the center’s various programs by providing a safe, nurturing, and engaging environment for their children. We understand that access to reliable childcare is essential for women seeking to attend therapy, legal consultations, job training, or any of our other services. Our professional childcare staff are dedicated to ensuring the well-being and happiness of each child, offering activities and care that promote their development and comfort."},
    //         {id: 5, name: "Referral Services", description: "Connecting You to Essential Resources", words: "Our Referral Services are designed to connect women with a wide network of additional resources and services that they may need, beyond what our center provides. Whether it’s medical care, long-term housing, job training, or other specialized support, our team works closely with trusted partners and organizations to ensure that every woman receives the comprehensive assistance necessary for her well-being and recovery. We are committed to guiding women to the right resources, offering continued support every step of the way."},
    //         {id: 6, name: "Hotline Services", description: "Immediate Support When You Need It Most", words: "Our Hotline Services provide immediate, 24/7 support for women who are in crisis, need urgent assistance, or simply need someone to talk to. Our hotline is staffed by trained professionals who are ready to offer compassionate, confidential support at any time of the day or night. Whether you are facing a dangerous situation, experiencing emotional distress, or seeking information about our services, our hotline is here to provide the help you need, when you need it."},
    //     ]
    // })

    // Section INIT
    // await prisma.section.createMany({
    //     data: [
    //         {id: 1, serviceId: 1, section: "Comprehensive Legal Support: Receive expert advice on legal matters, tailored to your specific needs."},
    //         {id: 2, serviceId: 1, section: "Empowerment through Knowledge: Understand your rights and the legal options available to you."},
    //         {id: 3, serviceId: 1, section: "Safe and Confidential Environment: Discuss your concerns in a safe, confidential setting where your privacy is respected."},
    //         {id: 4, serviceId: 1, section: "Access to Resources: Connect with a network of resources and support services that can help you beyond legal advice."},
    //         {id: 5, serviceId: 2, section: "Immediate Safety: Quick access to a secure and confidential shelter for women in crisis."},
    //         {id: 6, serviceId: 2, section: "Comprehensive Support: Access to essential services including counseling, legal assistance, and healthcare."},
    //         {id: 7, serviceId: 2, section: "Healing Environment: A supportive and caring community that fosters recovery and empowerment."},
    //         {id: 8, serviceId: 2, section: "Empowerment and Independence: Programs and resources aimed at empowering women to regain their independence and rebuild their lives."},
    //         {id: 9, serviceId: 3, section: "Emotional Support: Connect with others who have shared similar experiences and find comfort in knowing you are not alone."},
    //         {id: 10, serviceId: 3, section: "Therapeutic Guidance: Benefit from the expertise of professional therapists who facilitate the sessions and provide valuable insights."},
    //         {id: 11, serviceId: 3, section: "Community Healing: Build a supportive network that fosters healing, empowerment, and personal growth."},
    //         {id: 12, serviceId: 3, section: "Safe Environment: Participate in a confidential and non-judgmental space where you can openly discuss your experiences and feelings."},
    //         {id: 13, serviceId: 4, section: "Peace of Mind: Know that your children are in safe hands while you focus on your recovery and personal growth."},
    //         {id: 14, serviceId: 4, section: "Developmental Activities: Engage your children in activities that support their physical, emotional, and cognitive development."},
    //         {id: 15, serviceId: 4, section: "Qualified Staff: Benefit from the care and expertise of professional childcare providers dedicated to your child’s well-being."},
    //         {id: 16, serviceId: 4, section: "Convenient Access: Easily access childcare within the same facility where you are receiving other essential services, ensuring a seamless and supportive experience."},
    //         {id: 17, serviceId: 5, section: "Comprehensive Support: Access a broad network of resources to meet all your needs."},
    //         {id: 18, serviceId: 5, section: "Personalized Referrals: Receive tailored recommendations based on your unique situation and requirements."},
    //         {id: 19, serviceId: 5, section: "Continued Guidance: Benefit from our ongoing support as you connect with additional services and resources."},
    //         {id: 20, serviceId: 5, section: "Trusted Partnerships: Connect with reputable and trusted partners ensuring high-quality support and services."},
    //         {id: 21, serviceId: 6, section: "Immediate Assistance: Get urgent help and support at any time, day or night."},
    //         {id: 22, serviceId: 6, section: "Confidential and Compassionate: Speak with trained professionals who offer a safe, non-judgmental space for you to express your concerns."},
    //         {id: 23, serviceId: 6, section: "Access to Resources: Receive information about available services and resources that can assist you further."},
    //         {id: 24, serviceId: 6, section: "A new Empowerment: Gain confidence and clarity through personalized guidance and support, empowering you to take positive steps forward."},
    //     ]
    // })

    // Testimonial INIT
    // await prisma.testimonial.createMany({
    //     data: [
    //         {serviceId: 1, personId: 8, role: "Responsible of the Service", words: "As a legal advisor, my mission is to empower women by providing them with the knowledge and support they need to reclaim their lives. I am deeply committed to advocating for the rights of survivors and ensuring they have access to justice. Each case is a reminder of the resilience and strength of the women I have the honor to assist."},
    //         {serviceId: 1, personId: 101, role: "Survivor of Domestic Violence", words: "The legal assistance I received from the center was a lifeline. They helped me understand my rights and supported me through every step of the legal process. I felt empowered and confident to stand up for myself."},
    //         {serviceId: 1, personId: 102, role: "Human Trafficking Survivor", words: "I was lost and didn't know where to turn. The legal team at the center provided me with the guidance and support I needed to take legal action against my traffickers. Their compassion and expertise were invaluable."},
    //         {serviceId: 1, personId: 103, role: "Family Law Client", words: "Navigating the legal system was daunting, but the center's legal assistance made it manageable. They explained everything clearly and were with me every step of the way. I am incredibly grateful for their help."},
    //         {serviceId: 2, personId: 14, role: "Responsible of the Service", words: "Providing a safe haven for women in crisis is a responsibility I take very seriously. Ensuring that our emergency shelter runs smoothly and efficiently allows us to offer immediate and critical support to those in need. My role is to facilitate a secure, welcoming environment where women can find the safety and stability they deserve."},
    //         {serviceId: 2, personId: 104, role: "Domestic Violence Survivor", words: "The Emergency Shelter saved my life. I had nowhere to go and was terrified for my safety. The staff welcomed me with open arms and provided a safe place to stay while I figured out my next steps. I will forever be grateful for their support."},
    //         {serviceId: 2, personId: 105, role: "Human Trafficking Survivor", words: "Escaping my traffickers was the hardest thing I've ever done, but finding the Emergency Shelter gave me hope. The staff not only provided a safe place to stay but also connected me with resources to start rebuilding my life. I felt safe for the first time in years."},
    //         {serviceId: 2, personId: 106, role: "Abuse Survivor", words: "When I finally decided to leave my abusive partner, I didn't know where to turn. The Emergency Shelter was a beacon of hope. The care and support I received there were beyond anything I could have imagined. They helped me find the strength to start over."},
    //         {serviceId: 3, personId: 16, role: "Responsible of the Service", words: "Leading the group therapy sessions has been incredibly rewarding. Creating a safe space where women can share their experiences and support each other is vital for their healing process. It's inspiring to see the strength and resilience that emerges when we come together as a community."},
    //         {serviceId: 3, personId: 107, role: "Group Therapy Participant", words: "Joining the group therapy sessions was a transformative experience for me. Sharing my story and hearing others' stories helped me realize that I wasn't alone. The support and understanding I received from the group have been incredibly healing."},
    //         {serviceId: 3, personId: 108, role: "Domestic Violence Survivor", words: "The group therapy sessions provided a safe space where I could express my feelings without judgment. The connections I made with other women in the group gave me strength and hope. The facilitators were compassionate and knowledgeable, guiding us through our healing journey."},
    //         {serviceId: 3, personId: 109, role: "Trauma Survivor", words: "Being part of the group therapy sessions has been a crucial part of my recovery. The sense of community and mutual support has helped me process my trauma and start rebuilding my life. I am deeply grateful for this service and the amazing women I've met."},
    //         {serviceId: 4, personId: 17, role: "Responsible of the Service", words: "Providing childcare services is more than just supervision; it's about creating a nurturing environment where children feel safe and valued. I am dedicated to supporting the emotional and social development of each child while their mothers focus on healing. Knowing that I can offer peace of mind to these families during such a crucial time is incredibly fulfilling."},
    //         {serviceId: 4, personId: 110, role: "Mother and Program Participant", words: "The childcare services at the center have been a lifesaver for me. Knowing that my child is safe and happy while I attend my therapy sessions has allowed me to focus on my recovery without any worries. The staff are amazing and truly care about the children."},
    //         {serviceId: 4, personId: 111, role: "Domestic Violence Survivor", words: "Finding reliable childcare was a huge challenge for me, but the center’s childcare services have made it possible for me to attend legal consultations and job training. My child loves the activities and has made new friends. It's a wonderful service."},
    //         {serviceId: 4, personId: 112, role: "Program Participant", words: "The childcare staff are so kind and attentive. My child always looks forward to going to the center, and it gives me peace of mind to know that they are well taken care of. This service has been incredibly helpful for our family."},
    //         {serviceId: 5, personId: 20, role: "Responsible of the Service", words: "Connecting women to essential resources is at the heart of my work. My goal is to ensure that every woman we support has access to the services and assistance she needs to rebuild her life. It is incredibly rewarding to see the positive impact that these connections can make, empowering women to move forward with confidence and hope."},
    //         {serviceId: 5, personId: 113, role: "Domestic Violence Survivor", words: "The referral services at the center were a crucial part of my recovery. They connected me with a fantastic healthcare provider and helped me find long-term housing. Their support didn't end at the center's door; they truly cared about my ongoing well-being."},
    //         {serviceId: 5, personId: 114, role: "Human Trafficking Survivor", words: "I was in desperate need of medical care and had no idea where to turn. The center’s referral service guided me to a compassionate doctor and ensured I got the care I needed. They made the whole process so much easier and less overwhelming."},
    //         {serviceId: 5, personId: 115, role: "Abuse Survivor", words: "The referral team was amazing. They listened to my situation and connected me with job training programs that have since helped me secure stable employment. I am so grateful for their guidance and support."},
    //         {serviceId: 6, personId: 14, role: "Responsible of the Service", words: "Running the hotline services is a vital part of our support system. Ensuring that we are always available to listen and provide immediate assistance to those in crisis is my top priority. It's fulfilling to know that through our hotline, we can offer comfort, guidance, and essential resources to those who need it most."},
    //         {serviceId: 6, personId: 116, role: "Domestic Violence Survivor", words: "I called the hotline in the middle of the night when I had no one else to turn to. The person on the other end was incredibly kind and supportive. They helped me feel less alone and guided me on what steps to take next. It was a lifeline for me."},
    //         {serviceId: 6, personId: 117, role: "Human Trafficking Survivor", words: "The hotline was my first contact with the center. I was scared and didn’t know where to go. The support I received over the phone gave me the courage to seek help and change my situation. I am forever grateful for that initial call."},
    //         {serviceId: 6, personId: 118, role: "Emotional Distress Caller", words: "Sometimes you just need someone to listen, and the hotline provided that. The person I spoke to was patient and understanding. They helped me calm down and see things more clearly. It was such a relief to know that someone was there for me."},
    //     ]
    // })
}

main().then(async () => {
    await prisma.$disconnect()
})
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })