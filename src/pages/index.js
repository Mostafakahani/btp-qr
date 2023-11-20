import { Box, Button, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>بارمان تجارت پایدار</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <Box component={'img'} src='/head.svg' sx={{
            position: "relative",
            top: '-10px'
          }} />
        </Grid>
        <Grid item xs={12} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} my={2}>
          <Typography variant='h4' mb={2} sx={{
            background: 'linear-gradient(to top, rgb(191, 157, 97), rgb(246, 216, 140))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
            // fontSize: '50px'
          }}>
            بارمان تجارت پایدار
          </Typography>
          <Typography variant='p' sx={{
            color: '#fff',
            textAlign: "center"
          }}>
            وارد کننده مــــواد اولیـــه صنایع
            <br />
            غذایی و شیمیایی، آرایشی، بهداشتی و دارویی
          </Typography>
        </Grid>
        <Grid item xs={12}><Box component={'img'} src='/line.svg' /></Grid>
        <Grid item xs={12}>
          <Typography variant='p' sx={{ color: '#fff', fontWeight: 600 }}>
            لینک های اصلی
          </Typography>
        </Grid>
        <Grid container item xs={12} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Link style={{ width: '280px' }} href={''}>
            <Button variant='contained' fullWidth endIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M17.6681 10.5994V14.5594C17.6681 14.8277 17.6765 15.0972 17.6415 15.3639L17.6606 15.222C17.6392 15.3752 17.6061 15.5266 17.5618 15.6748C17.54 15.7478 17.5143 15.8196 17.4868 15.8907C17.4374 16.0182 17.5286 15.796 17.492 15.8796C17.4751 15.918 17.4569 15.9558 17.4385 15.9935C17.3723 16.1282 17.294 16.2568 17.2079 16.3796C17.1888 16.4068 17.1689 16.4335 17.149 16.46C17.2625 16.3092 17.1667 16.4355 17.1391 16.4685C17.0859 16.5321 17.0293 16.5928 16.9709 16.6516C16.9184 16.7046 16.8632 16.7548 16.8068 16.8036C16.7817 16.8252 16.7561 16.8464 16.7302 16.8671C16.688 16.9005 16.7044 16.888 16.7793 16.8296C16.7596 16.8448 16.7394 16.8594 16.7193 16.874C16.5979 16.9622 16.4687 17.0394 16.3353 17.1078C16.2904 17.1306 16.245 17.1522 16.199 17.1726C16.1076 17.2136 16.3265 17.1202 16.2335 17.1581C16.1631 17.1868 16.0911 17.2118 16.0186 17.2349C15.8631 17.2844 15.7029 17.3186 15.5414 17.3412L15.6833 17.3222C15.4368 17.3545 15.1895 17.3488 14.9417 17.3488H6.18212C5.97639 17.3488 5.77273 17.349 5.56782 17.3222L5.70968 17.3412C5.55646 17.3198 5.40508 17.2868 5.25684 17.2424C5.18384 17.2206 5.11204 17.195 5.04103 17.1674C4.9135 17.118 5.13572 17.2092 5.05204 17.1726C5.01364 17.1557 4.97584 17.1376 4.9382 17.1191C4.80347 17.0529 4.67493 16.9746 4.55207 16.8885C4.52487 16.8694 4.49822 16.8496 4.47169 16.8296C4.62253 16.9431 4.49616 16.8473 4.46315 16.8197C4.39955 16.7666 4.33894 16.7099 4.2801 16.6516C4.22713 16.599 4.17685 16.5439 4.12806 16.4875C4.10645 16.4623 4.08528 16.4367 4.06455 16.4108C4.0312 16.3686 4.0437 16.385 4.10208 16.46C4.08693 16.4402 4.07229 16.42 4.05764 16.3999C3.96945 16.2785 3.89229 16.1493 3.82385 16.0159C3.80106 15.9711 3.77947 15.9256 3.7591 15.8796C3.71805 15.7882 3.81148 16.0071 3.77359 15.9142C3.74485 15.8437 3.71984 15.7717 3.69676 15.6992C3.64726 15.5437 3.6131 15.3836 3.59046 15.222L3.60952 15.3639C3.57721 15.1174 3.58291 14.8701 3.58291 14.6223V5.86272C3.58291 5.65701 3.58265 5.45334 3.60952 5.24843L3.59046 5.39031C3.61191 5.23708 3.64493 5.0857 3.68925 4.93746C3.71107 4.86447 3.73673 4.79267 3.76425 4.72165C3.81365 4.59412 3.72243 4.81634 3.7591 4.73269C3.77593 4.69428 3.7941 4.65647 3.81258 4.61884C3.87876 4.48411 3.95708 4.35557 4.04315 4.23269C4.06221 4.20549 4.08209 4.17887 4.10206 4.15233C3.98851 4.30317 4.08432 4.17681 4.11192 4.14378C4.16509 4.08019 4.22172 4.01956 4.28006 3.96073C4.33259 3.90776 4.38777 3.85748 4.44417 3.80869C4.46935 3.78709 4.49489 3.76591 4.52079 3.74518C4.56299 3.71182 4.54662 3.72433 4.47167 3.78271C4.49146 3.76755 4.5116 3.75292 4.53175 3.73826C4.65314 3.65007 4.78231 3.57292 4.91573 3.50447C4.96059 3.48172 5.00603 3.46013 5.05201 3.43973C5.14347 3.39867 4.92453 3.4921 5.01749 3.45421C5.08797 3.42547 5.15994 3.40046 5.23244 3.37738C5.38797 3.32788 5.54811 3.29373 5.70964 3.27108L5.56778 3.29014C5.91768 3.24427 6.27953 3.26354 6.63162 3.26354H10.3323C10.6232 3.26354 10.866 3.02077 10.866 2.72986C10.866 2.43895 10.6232 2.19619 10.3323 2.19619H6.15934C6.04066 2.19619 5.92188 2.19462 5.8033 2.2005C5.29445 2.22571 4.80728 2.36218 4.3547 2.59431C3.51131 3.02687 2.8782 3.84141 2.63204 4.75203C2.53182 5.12276 2.51556 5.50152 2.51556 5.88209V14.7682C2.51556 15.1874 2.54711 15.6047 2.67525 16.0073C2.96183 16.9076 3.62864 17.6881 4.49033 18.0839C4.99843 18.3173 5.5302 18.4162 6.0871 18.4162H14.9495C15.2449 18.4162 15.5301 18.4119 15.8252 18.3705C16.7789 18.2367 17.6176 17.6627 18.158 16.8774C18.5627 16.2893 18.7355 15.5813 18.7355 14.8746V10.5994C18.7355 10.3085 18.4928 10.0657 18.2018 10.0657C17.9109 10.0657 17.6681 10.3084 17.6681 10.5994ZM13.9705 3.26354H18.2018C18.4928 3.26354 18.7355 3.02077 18.7355 2.72986C18.7355 2.43895 18.4928 2.19619 18.2018 2.19619H13.9705C13.6796 2.19619 13.4369 2.43895 13.4369 2.72986C13.4369 3.02077 13.6796 3.26354 13.9705 3.26354Z" fill="white" />
                <path d="M18.7355 6.96113V2.72986C18.7355 2.43895 18.4928 2.19618 18.2018 2.19618C17.9109 2.19618 17.6682 2.43895 17.6682 2.72986V6.96113C17.6682 7.25204 17.9109 7.49481 18.2018 7.49481C18.4928 7.49481 18.7355 7.25204 18.7355 6.96113Z" fill="white" />
                <path d="M11.0183 10.6681L12.0954 9.59096L14.5161 7.17027L17.0645 4.6219C17.5694 4.11699 18.0743 3.6121 18.5792 3.10722C18.7848 2.90162 18.7848 2.55808 18.5792 2.35249C18.3736 2.14687 18.0301 2.14687 17.8245 2.35249L16.7474 3.42959L14.3266 5.85028L11.7783 8.39866C11.2734 8.90356 10.7685 9.40845 10.2636 9.91334C10.058 10.1189 10.058 10.4625 10.2636 10.6681C10.4692 10.8737 10.8127 10.8737 11.0183 10.6681Z" fill="white" />
              </svg>
            } sx={{
              display: "flex",
              justifyContent: 'space-between',
              alignItems: "center",
              flexDirection: 'row',
              color: '#fff',
              backgroundColor: '#20223B',
              '&:hover':{
                
              }
            }}>
              ورود به سایت
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={12}><Box component={'img'} src='/line.svg' /></Grid>
      </Grid>

    </>
  )
}
