import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, MenuItem } from '@mui/material';
import './Home.scss';

import Header from '../../components/Header';
import moment from 'moment';

const HomePage = () => {
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [interval, setInterval] = useState(0);

  const handleDate = () => {
    const start = moment(dateStart.target?.value);
    const end = moment(dateEnd.target?.value);
    const interval = end.diff(start, 'days');
    console.log(interval);
    setInterval(interval);

    // const date = new Date(); //new - из темы классов, когда создается экземпляр класса. Создается тип данных date.
    //console.log(dateStart.target?.value, dateEnd.target?.value); //знак вопроса для того чтобы если нет value, то не было бы ошибки
  };

  return (
    <>
      <Header />
      <div className="main-page">
        <header className="main-page__header">
          <img
            width="100%"
            src="./img/beach.jpg"
            alt="Пляж Бали"
            className="main-page__header-image"
            style={{
              height: '400px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom className="main-page__header-title">
            Добро пожаловать на Бали
          </Typography>
          <Typography variant="body1" gutterBottom>
            Откройте для себя красоту Бали с нами. Забронируйте отдых, исследуйте достопримечательности и наслаждайтесь незабываемыми впечатлениями.
          </Typography>
          <Button variant="contained" color="primary" className="main-page__cta-button">
            Исследовать Бали
          </Button>
        </header>
        <div className="main-page__search">
          <TextField label="Искать направления" variant="outlined" className="main-page__search-input" style={{ marginRight: '10px', flex: 1 }} />
          <TextField
            onChange={(e) => setDateStart(e)}
            label="Дата заезда"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            className="main-page__search-input"
            style={{ marginRight: '10px', flex: 1 }}
          />
          {Boolean(interval) && <span className="main-page__interval">Длительность: {interval} дн.</span>}
          {/* Если приходит false, дальше не проверяет. Если
          true, проверяет дальше. */}
          <TextField
            onChange={(e) => setDateEnd(e)}
            label="Дата выезда"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            className="main-page__search-input"
            style={{ marginRight: '10px', flex: 1 }}
          />
          <TextField
            select
            label="Лимит цены"
            variant="outlined"
            defaultValue="5000"
            className="main-page__search-input"
            style={{ marginRight: '10px', flex: 1 }}
          >
            <MenuItem value="5000">$5,000</MenuItem>
            <MenuItem value="10000">$10,000</MenuItem>
            <MenuItem value="20000">$20,000</MenuItem>
          </TextField>
          <Button onClick={handleDate} variant="contained" color="primary" className="main-page__cta-button" style={{ flex: 0 }}>
            Найти
          </Button>
        </div>

        <div className="main-page__section main-page__section--highlighted">
          <Typography variant="h4" gutterBottom>
            Популярные направления
          </Typography>
          <div className="main-page__cards">
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/ubud.jpg" alt="Убуд" className="main-page__card-image" />
                <Typography variant="h5">Убуд</Typography>
                <Typography variant="body2">Центр традиционных ремесел и танцев, окруженный пышной природой и храмами.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/seminyak.jpg" alt="Семиньяк" className="main-page__card-image" />
                <Typography variant="h5">Семиньяк</Typography>
                <Typography variant="body2">
                  Яркий пляжный город, известный своими роскошными курортами, элитными бутиками и оживленной ночной жизнью.
                </Typography>
              </CardContent>
            </Card>
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/nusa-dua.jpg" alt="Нуса-Дуа" className="main-page__card-image" />
                <Typography variant="h5">Нуса-Дуа</Typography>
                <Typography variant="body2">Уникальное место с мировыми курортами, песчаными пляжами и спокойными водами.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="main-page__section">
          <Typography variant="h4" gutterBottom>
            Почему выбирают Бали
          </Typography>
          <div className="main-page__features">
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/nature.jpg" alt="Удивительная природа" className="main-page__feature-image" />
                <Typography variant="h6">Удивительная природа</Typography>
                <Typography variant="body2">Откройте для себя потрясающие пейзажи, от пляжей до гор.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/culture.jpg" alt="Богатая культура" className="main-page__feature-image" />
                <Typography variant="h6">Богатая культура</Typography>
                <Typography variant="body2">Исследуйте уникальные традиции Бали, храмы и церемонии.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/luxury.jpg" alt="Роскошное проживание" className="main-page__feature-image" />
                <Typography variant="h6">Роскошное проживание</Typography>
                <Typography variant="body2">Останавливайтесь в известных на весь мир курортах, виллах и пляжных отелях.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
