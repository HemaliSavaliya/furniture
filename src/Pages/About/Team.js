import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { teamMembers } from '../../Common/Data/FurnitureData';

const Team = () => {
  return (
    <section className="our-team-page our-team-about section-box">
      <div className="container">
        <div className="our-team-content">
          <h2 className="special-heading">Meet Our Team</h2>
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={member.id}>
                <div className="our-team-detail">
                  <div className="member-images">
                    <img
                      src={member.image}
                      alt={`our-team-${member.id}`}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info">
                    <h4 className="name">{member.name}</h4>
                    <span className="job">{member.job}</span>
                    <div className="socials">
                      <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaWhatsapp />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;