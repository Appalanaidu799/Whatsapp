import React, { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
} from '@mui/material';

const ValentineCard = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '60%', left: '55%' });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 60 + 20) + '%';
    const randomLeft = Math.floor(Math.random() * 60 + 20) + '%';
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fce4ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={12}     // 📱 Mobile
          sm={10}
          md={8}
          lg={6}     // 💻 Laptop
        >
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 3,
              boxShadow: 3,
              p: { xs: 4, md: 6 }, // responsive padding
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {!hasAccepted ? (
              <>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '22px', md: '32px' },
                    lineHeight: 1.4,
                    mb: 4,
                  }}
                >
                  <strong>Bangaram</strong> (Gowri), <br />
                I Think you hate me ? 💕
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#e91e63',
                      mr: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: '16px',
                      '&:hover': { bgcolor: '#d81b60' },
                    }}
                    onClick={() => setHasAccepted(true)}
                  >
                    YES
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      position: 'fixed',
                      top: noButtonPos.top,
                      left: noButtonPos.left,
                      px: 4,
                      py: 1.5,
                      fontSize: '16px',
                    }}
                    onMouseOver={moveButton}
                    onTouchStart={moveButton}
                    onClick={moveButton}
                  >
                    NO
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography
                  variant="h3"
                  color="secondary"
                  mb={2}
                >
                  💖 YAY!!! 💖
                </Typography>

                <Typography mb={2}>
                  Bangaram you are mine! 🥰
                </Typography>

<Box
  component="video"
  src="/images/GAN passphoto.mp4"
  autoPlay
  loop
  muted
  playsInline
  sx={{
    width: 250,
    height: 300,
    borderRadius: 2,
    mt: 2,
    objectFit: 'cover',
    display: 'block',
    mx: 'auto',
  }}
/>



                <Typography mt={2} fontWeight="bold">
                   ❤️❤️❤️❤️❤️❤️❤️❤️
                </Typography>
                <Typography>Thank you for being so special to me Bangaram</Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ValentineCard;
