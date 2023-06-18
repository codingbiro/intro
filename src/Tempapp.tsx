import {
  Box, Divider, Link, Typography, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import { motion } from 'framer-motion';

const background = `
radial-gradient(
  circle, rgba(94,96,206,1) 0%, rgba(83,144,217,1) 25%, rgba(72,191,227,1) 50%, rgba(100,223,223,1) 75%, rgba(128,255,219,1) 100%
)
`;

export default function Tempapp() {
  const mobile = useMediaQuery('(max-width:900px)');

  return (
    <Box
      textAlign="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        background,
      }}
    >
      <Box color="white" p={mobile ? 2 : 0}>
        <Box height="100%" width="100%" pb={2}>
          <motion.div
            animate={{ scale: 2 }}
            transition={{ duration: 1 }}
            style={{ paddingBottom: '50px', maxWidth: mobile ? '100px' : '50%', margin: 'auto' }}
          >
            <img src="/face.png" alt="Biro Vince" width="100px" height="100px" />
          </motion.div>
          <motion.div
            animate={{ x: mobile ? [0, 10, 0] : [0, 100, 0] }}
            transition={{
              delay: 1,
              x: { type: 'spring', stiffness: 100 },
              default: { duration: 2 },
            }}
          >
            <Typography variant="h2" style={mobile ? { fontSize: '2.5rem' } : undefined}>
              <span role="img" aria-label="Snowman" style={{ paddingRight: '20px' }}>👋</span>
              Hi, I am Vince
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{
              delay: 4,
              default: { duration: 2 },
            }}
          >
            <Typography variant="h5" style={{ paddingTop: '30px' }}>
              I create secure web apps using Node.js, TypeScript, GraphQL with Apollo and React/Next.js.
            </Typography>
            <Typography variant="h6" style={{ paddingTop: '10px' }}>
              I also do DevOps using technologies like Docker, Kubernetes and Serverless solutions running on AWS and GCP.
            </Typography>
          </motion.div>
          <Box
            style={{
              position: 'absolute', bottom: mobile ? '40px' : '100px', textAlign: 'center', left: 0, right: 0,
            }}
          >
            <Typography
              component="div"
              variant="h5"
              style={{
                color: '#6930C3', paddingTop: '20px', display: 'flex', justifyContent: 'center',
              }}
            >
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                  default: { duration: 1 },
                }}
              >
                <Link href="mailto:hello@birovince.com" style={{ paddingRight: '10px' }}>
                  Let&apos;s talk
                </Link>
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                  default: { duration: 2 },
                }}
                style={{ display: 'flex' }}
              >
                <Divider orientation="vertical" flexItem />
                <Link href="https://github.com/codingbiro" style={{ padding: '0 10px' }} target="_blank">
                  Github
                </Link>
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                  default: { duration: 3 },
                }}
                style={{ display: 'flex' }}
              >
                <Divider orientation="vertical" flexItem />
                <Link href="https://www.linkedin.com/in/birovince" style={{ paddingLeft: '10px' }} target="_blank">
                  Linkedin
                </Link>
              </motion.div>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
