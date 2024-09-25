import React from 'react';
import MeetTheTeam from './MeetTheTeam'; // Import MeetTheTeam component

const AboutUs = () => {
  return (
    <div>
      <section style={styles.section}>
        <h2>About Us</h2>
        <p style={styles.blurb}>
          Have you ever faced challenges in evaluating your language model's performance over time? 
          We aim to create a solution that maintains your model's history in a neat and organized manner, 
          allowing you to effortlessly track how finetuning affects your model's evaluations. 
          Additionally, our platform will enable you to assess how your model performs across various topics, 
          ensuring comprehensive and insightful evaluations of your LLM. We are utilizing an application called promptbench 
          to obtain the evaluation.
        </p>
      </section>
      <MeetTheTeam /> {/* Include Meet the Team section here */}
    </div>
  );
};

const styles = {
  section: {
    padding: '20px',
    textAlign: 'center',
  },
  blurb: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginTop: '10px',
  },
};

export default AboutUs;
