
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Working with this developer was a fantastic experience. They delivered our project ahead of schedule with all specifications met. Their attention to detail and problem-solving skills are impressive.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The quality of work delivered exceeded our expectations. Communication was clear throughout the project, and they were able to translate our requirements into an elegant solution.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "An absolute pleasure to work with. Their expertise in modern web technologies helped us revamp our outdated platform into something our users love. Would definitely hire again!",
    author: "Emily Rodriguez",
    role: "Marketing Director at CreativeHub",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, role, image }) => (
  <div className="testimonial-card bg-card">
    <div className="mb-6">
      <p className="text-lg text-card-foreground">{content}</p>
    </div>
    <div className="flex items-center gap-3">
      <Avatar>
        {image ? (
          <AvatarImage src={image} alt={author} />
        ) : null}
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="static transform-none translate-y-0 mx-2" />
          <CarouselNext className="static transform-none translate-y-0 mx-2" />
        </div>
      </Carousel>
    </div>
  );
}
