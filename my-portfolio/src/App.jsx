import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Ochieng Tony Blair</h1>
        <p className="text-xl text-gray-600">Electrical Engineer | AI & Robotics Researcher</p>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              I’m passionate about artificial intelligence, robotics, and autonomous systems. I hold a BSc in Electrical Engineering from Makerere University and have worked on real-world AI projects in Uganda. My goal is to contribute to cutting-edge AI research, particularly in reinforcement learning, perception, and robotics.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Maize Plant Detection</h3>
              <p className="text-sm text-gray-600 mb-2">Computer vision system to analyze maize leaf patterns for agricultural research (Marconi Lab).</p>
              <a href="https://github.com/yourgithub/maize-detection" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">Reinforcement Learning Simulation</h3>
              <p className="text-sm text-gray-600 mb-2">Simulated robot learning to navigate a grid using Q-learning.</p>
              <a href="https://github.com/yourgithub/rl-sim" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {['Python', 'TensorFlow', 'PyTorch', 'ROS', 'SQL', 'HTML/CSS', 'Deep Learning', 'Reinforcement Learning'].map(skill => (
            <li key={skill} className="bg-white px-3 py-1 rounded-full shadow text-sm">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:youremail@example.com" target="_blank"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/yourgithub" target="_blank"><Github className="w-6 h-6" /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank"><Linkedin className="w-6 h-6" /></a>
        </div>
      </footer>
    </div>
  );
}
