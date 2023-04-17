import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className=" content">
        <div>
          Linear Shift Registers (LSRs) are a type of digital circuit that is
          commonly used in electronic devices for generating pseudorandom
          numbers. LSRs consist of a chain of flip-flops, where each flip-flop
          is connected to the next one in the chain, forming a shift register.
          LSRs can be used to generate a sequence of binary digits that appears
          to be random, but is actually deterministic, meaning that it can be
          predicted based on the initial state of the shift register.
        </div>
        <figure>
          <img className="img" src="./img/lsr.png" alt="lsr" />
          <figcaption className="img-title">Pic. 1 - LSR</figcaption>
        </figure>
        <div>
          Matrix Shift Registers (MSRs) are another type of digital circuit that
          can be used for generating pseudorandom numbers. Unlike LSRs, which
          are composed of a single chain of flip-flops, MSRs consist of multiple
          shift registers that are combined in a matrix configuration. This
          allows MSRs to generate much longer and more complex sequences of
          pseudorandom numbers than LSRs. MSRs are typically implemented using
          field-programmable gate arrays (FPGAs) or application-specific
          integrated circuits (ASICs), due to their complexity and the large
          number of logic gates required to implement them. In addition to
          generating pseudorandom numbers, MSRs are also used in a variety of
          other applications, such as error correction coding and cryptography.
        </div>
        <figure>
          <img className="img" src="./img/msr.png" alt="lsr" />
          <figcaption className="img-title">Pic. 2 - MSR</figcaption>
        </figure>
        <div>
          Both LSRs and MSRs are important building blocks in modern digital
          circuits and are widely used in a variety of electronic devices,
          including computers, smartphones, and IoT devices.
        </div>
        <div>
          The website can assist in calculating the Matrix Shift Register (MSR)
          and Linear Shift Register (LSR) by providing tools for inputting
          parameters and calculating output values. To calculate LSR, you can
          use the formula:
          <div className="img-title">Xn = (aXn-1 + c) mod m</div>
          Where Xn-1 is the previous value, a is the multiplier, c is the
          constant, and m is the modulus. With the website, you can easily enter
          values for a, c, m, and the initial value X0, and obtain the output
          value Xn. To calculate MSR, you need to use a transition matrix. The
          transition matrix is a square matrix in which each element is a value
          from the set of 0 and 1.
          <div>
            The values in the matrix indicate which registers should be used to
            obtain a new register value. The website can provide tools for
            inputting the transition matrix and initial register values, and
            calculate the output value. Overall, the website can be useful for
            those working with random number generation, data encryption, and
            other tasks related to the use of LSR and MSR. The calculations on
            the website can be fast and accurate, saving time and reducing the
            likelihood of errors in calculations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
