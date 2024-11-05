import {Component} from '@angular/core';
import {JobCardComponent} from '../../shared/component/job-card/job-card.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job.component.html',
})
export class JobComponent {
  jobOffers = [
    {
      id: 1,
      name: "Front-End Developer",
      location: "New York, NY",
      tags: ["JavaScript", "React", "CSS"],
      description: "Join our team as a Front-End Developer to build and maintain responsive web applications."
    },
    {
      id: 2,
      name: "Backend Engineer",
      location: "San Francisco, CA",
      tags: ["Node.js", "Express", "MongoDB"],
      description: "We are looking for a skilled Backend Engineer to manage and improve server-side operations."
    },
    {
      id: 3,
      name: "Full-Stack Developer",
      location: "Austin, TX",
      tags: ["JavaScript", "Node.js", "React", "Express"],
      description: "Seeking a Full-Stack Developer who can create both client-side and server-side applications."
    },
    {
      id: 4,
      name: "UI/UX Designer",
      location: "Chicago, IL",
      tags: ["Figma", "Adobe XD", "Sketch"],
      description: "We need a creative UI/UX Designer to enhance user satisfaction through better usability."
    },
    {
      id: 5,
      name: "DevOps Engineer",
      location: "Seattle, WA",
      tags: ["AWS", "Docker", "Kubernetes"],
      description: "Join us as a DevOps Engineer to help streamline our deployment processes and enhance system reliability."
    },
    {
      id: 6,
      name: "Data Scientist",
      location: "Boston, MA",
      tags: ["Python", "R", "Machine Learning"],
      description: "Looking for a Data Scientist to analyze complex data sets and derive actionable insights."
    },
    {
      id: 7,
      name: "Mobile App Developer",
      location: "Los Angeles, CA",
      tags: ["React Native", "Swift", "Kotlin"],
      description: "Join our team to develop and maintain mobile applications for iOS and Android."
    },
    {
      id: 8,
      name: "Product Manager",
      location: "Denver, CO",
      tags: ["Agile", "Scrum", "Product Strategy"],
      description: "We are seeking a Product Manager to lead product development from ideation to launch."
    },
    {
      id: 9,
      name: "Software Engineer Intern",
      location: "Miami, FL",
      tags: ["Java", "C++", "Python"],
      description: "Looking for a Software Engineer Intern to assist with coding, testing, and debugging software."
    },
    {
      id: 10,
      name: "Systems Analyst",
      location: "Philadelphia, PA",
      tags: ["SQL", "Data Analysis", "Business Intelligence"],
      description: "We need a Systems Analyst to analyze system requirements and improve our IT systems."
    }
  ];


}
