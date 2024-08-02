import React from 'react';
import styled from 'styled-components';
import staff1 from '../../assets/services/1.jpg';
import staff2 from '../../assets/services/2.jpg';
import staff3 from '../../assets/services/5.jpg';

const StaffSection = styled.section`
  background-color: #1c1c1c;
  color: white;
  padding: 40px 80px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 80%;
    background-color: #e53935;
  }
`;

const ViewAllButton = styled.button`
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const StaffMember = styled.div`
  text-align: left;
`;

const StaffImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const StaffImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const StaffName = styled.h3`
  font-size: 24px;
  margin: 0 0 5px 0;
`;

const StaffTitle = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0;
`;

const RedLine = styled.div`
  height: 2px;
  background-color: #e53935;
  width: 40px;
  margin: 15px 0;
`;

const OurStaff = () => {
  const staffMembers = [
    { name: 'Charles Wade', title: 'Tattoo Master, Founder', image: staff1 },
    { name: 'Henry Richard', title: 'Tattoo Master', image: staff2 },
    { name: 'Walter Evans', title: 'Junior Tattoo Master', image: staff3 },
  ];

  return (
    <StaffSection>
      <SectionHeader>
        <Title>OUR STAFF</Title>
        <ViewAllButton>VIEW ALL TEAM</ViewAllButton>
      </SectionHeader>
      <StaffGrid>
        {staffMembers.map((member, index) => (
          <StaffMember key={index}>
            <StaffImageWrapper>
              <StaffImage src={member.image} alt={member.name} />
            </StaffImageWrapper>
            <StaffName>{member.name}</StaffName>
            <StaffTitle>{member.title}</StaffTitle>
            <RedLine />
          </StaffMember>
        ))}
      </StaffGrid>
    </StaffSection>
  );
};

export default OurStaff;