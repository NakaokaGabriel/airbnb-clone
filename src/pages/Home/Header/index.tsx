import React from 'react';

import Container from '../../../components/Container';
import Navigation from '../../../components/Navigation';

const Header: React.FC = () => {
  return (
    <Container>
      <Background>
        <Navigation />
        <Form>
          <h2>Book unique accommodations and activities.</h2>
          <form>
            <div className="form-input">
              <label htmlFor="allover">
                Or
                <input type="text" placeholder="All over" />
              </label>
            </div>
          </form>
        </Form>
      </Background>
    </Container>
  );
};

export default Header;
