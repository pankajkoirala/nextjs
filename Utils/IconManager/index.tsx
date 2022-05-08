import { TypeOf } from "yup";

const icons = {
  editIcon: (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5625 3.625C12.4375 3.5 12.25 3.5 12.125 3.625L5.3125 10.4375L5 13.3438C4.9375 13.7188 5.28125 14.0625 5.65625 14L8.5625 13.6875L15.375 6.875C15.5 6.75 15.5 6.5625 15.375 6.4375L12.5625 3.625ZM17.625 2.90625L16.0938 1.375C15.625 0.90625 14.8438 0.90625 14.375 1.375L13.2812 2.46875C13.1562 2.59375 13.1562 2.78125 13.2812 2.90625L16.0938 5.71875C16.2188 5.84375 16.4062 5.84375 16.5312 5.71875L17.625 4.625C18.0938 4.15625 18.0938 3.375 17.625 2.90625ZM12 11.8438V15H2V5H9.15625C9.28125 5 9.375 4.96875 9.4375 4.90625L10.6875 3.65625C10.9062 3.40625 10.75 3 10.4062 3H1.5C0.65625 3 0 3.6875 0 4.5V15.5C0 16.3438 0.65625 17 1.5 17H12.5C13.3125 17 14 16.3438 14 15.5V10.5938C14 10.25 13.5938 10.0938 13.3438 10.3125L12.0938 11.5625C12.0312 11.625 12 11.7188 12 11.8438Z"
        fill="#8F8F8F"
      />
    </svg>
  ),
  deleteIcon: (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1H9.75L9.4375 0.4375C9.3125 0.1875 9.0625 0 8.78125 0H5.1875C4.90625 0 4.65625 0.1875 4.53125 0.4375L4.25 1H0.5C0.21875 1 0 1.25 0 1.5V2.5C0 2.78125 0.21875 3 0.5 3H13.5C13.75 3 14 2.78125 14 2.5V1.5C14 1.25 13.75 1 13.5 1ZM1.65625 14.5938C1.6875 15.4062 2.34375 16 3.15625 16H10.8125C11.625 16 12.2812 15.4062 12.3125 14.5938L13 4H1L1.65625 14.5938Z"
        fill="#8F8F8F"
      />
    </svg>
  ),
  duplicateIcon: (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14H4.75C3.78125 14 3 13.2188 3 12.25V3H0.75C0.3125 3 0 3.34375 0 3.75V15.25C0 15.6875 0.3125 16 0.75 16H9.25C9.65625 16 10 15.6875 10 15.25V14ZM10 3.25V0H4.75C4.3125 0 4 0.34375 4 0.75V12.25C4 12.6875 4.3125 13 4.75 13H13.25C13.6562 13 14 12.6875 14 12.25V4H10.75C10.3125 4 10 3.6875 10 3.25ZM13.75 2.28125L11.7188 0.25C11.5625 0.09375 11.375 0 11.1875 0H11V3H14V2.8125C14 2.625 13.9062 2.4375 13.75 2.28125Z"
        fill="#8F8F8F"
      />
    </svg>
  ),
  filterPeriod: (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 3.66667H20.4857C20.0571 1.55833 18.3429 0 16.2857 0C14.2286 0 12.5143 1.55833 12.0857 3.66667H0V5.5H12.0857C12.5143 7.60833 14.2286 9.16667 16.2857 9.16667C18.3429 9.16667 20.0571 7.60833 20.4857 5.5H24V3.66667ZM16.2857 7.33333C14.8286 7.33333 13.7143 6.14167 13.7143 4.58333C13.7143 3.025 14.8286 1.83333 16.2857 1.83333C17.7429 1.83333 18.8571 3.025 18.8571 4.58333C18.8571 6.14167 17.7429 7.33333 16.2857 7.33333ZM0 18.3333H3.51429C3.94286 20.4417 5.65714 22 7.71429 22C9.77143 22 11.4857 20.4417 11.9143 18.3333H24V16.5H11.9143C11.4857 14.3917 9.77143 12.8333 7.71429 12.8333C5.65714 12.8333 3.94286 14.3917 3.51429 16.5H0V18.3333ZM7.71429 14.6667C9.17143 14.6667 10.2857 15.8583 10.2857 17.4167C10.2857 18.975 9.17143 20.1667 7.71429 20.1667C6.25714 20.1667 5.14286 18.975 5.14286 17.4167C5.14286 15.8583 6.25714 14.6667 7.71429 14.6667Z"
        fill="white"
      />
    </svg>
  ),
  lock: (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 7H11.75V4.75C11.75 2.15625 9.59375 0 7 0C4.375 0 2.25 2.15625 2.25 4.75V7H1.5C0.65625 7 0 7.6875 0 8.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V8.5C14 7.6875 13.3125 7 12.5 7ZM9.25 7H4.75V4.75C4.75 3.53125 5.75 2.5 7 2.5C8.21875 2.5 9.25 3.53125 9.25 4.75V7Z"
        fill="#8F8F8F"
      />
    </svg>
  ),
  leaf: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="24"
      viewBox="0 0 78.071 64.735"
      fill="green"
    >
      <g
        id="Group_1134"
        data-name="Group 1134"
        transform="translate(-650.635 -1386.787)"
      >
        <g id="Group_1128" data-name="Group 1128">
          <g id="Group_1127" data-name="Group 1127">
            <g id="Group_1126" data-name="Group 1126">
              <g id="Group_1125" data-name="Group 1125">
                <g id="Group_1124" data-name="Group 1124">
                  <path
                    id="Path_183"
                    data-name="Path 183"
                    d="M705.435,1425.14c-2.263,4.521-3.629,4.761-3.629,4.761a63.114,63.114,0,0,0-9.165,4.521c-3.569.12-10.054-3.865-10.054-3.865.892-.835,5.533-2.619,5.533-2.619,6.546-1.428,6.485-2.736,6.485-2.736.061-5.237-4.76-2.976-4.76-2.976-2.8,1.428-5.594,1.606-11.9,1.428a17.513,17.513,0,0,0-10.888,3.749c-3.808,1.009-16.422,15.351-16.422,15.351l10.235,8.768,5.592-8.53s2.084-4.343,7.8-1.607,9.518,2.382,13.683,3.57,6.127-.714,6.127-.714l8.867-7.377c3.927-2.976,4.878-5.592,4.878-5.592,3.452-9.878,5.354-12.852,5.354-12.852C709.778,1416.98,707.7,1420.61,705.435,1425.14Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="Group_1133" data-name="Group 1133">
          <g id="Group_1132" data-name="Group 1132">
            <g id="Group_1131" data-name="Group 1131">
              <g id="Group_1130" data-name="Group 1130">
                <g id="Group_1129" data-name="Group 1129">
                  <path
                    id="Path_184"
                    data-name="Path 184"
                    d="M728.357,1389.58a22.786,22.786,0,0,0-11.04-2.793,22.439,22.439,0,0,0-9.583,2.155c-4.782,2.246-7.726,5.078-8.755,8.422a8.96,8.96,0,0,0,.3,6.076,15.346,15.346,0,0,0-3.427,9.589v.592a23.067,23.067,0,0,0-3.254-2.866,7.085,7.085,0,0,0-.247-4.725c-1.055-2.539-3.561-4.531-7.445-5.92a17.643,17.643,0,0,0-5.941-1.047,17.843,17.843,0,0,0-10.025,3.075.726.726,0,0,0-.29.634.719.719,0,0,0,.376.586,43.623,43.623,0,0,1,7.553,5.411c.21.2,5.253,4.892,10.445,4.892a7.4,7.4,0,0,0,4.76-1.7,16.557,16.557,0,0,1,4.069,4.009v13.038a4.134,4.134,0,0,1-.442.207c-1.551.566-2.783-.179-4.143-.688-.814.245-1.711.481-2.749.711-1.048.4-2.2.888-3.134,1.316,2.1,1.1,4.988,2.4,6.882,2.49a66.918,66.918,0,0,1,9.034-4.419l.106-.043a7.174,7.174,0,0,0,1.807-2.234,5.269,5.269,0,0,0-3.288-.091,8,8,0,0,0-2.615,1.733v-14.964a13.735,13.735,0,0,1,2.948-8.386,9.331,9.331,0,0,0,5.308,1.67c7,0,13.445-7.261,13.717-7.569a56.42,56.42,0,0,1,9.106-7.939.728.728,0,0,0-.03-1.225Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  search: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.0602 53.9397L40.5102 38.3897C43.6593 34.693 45.2558 29.9211 44.9653 25.0736C44.6747 20.2261 42.5197 15.6791 38.9515 12.385C35.3834 9.0909 30.679 7.30528 25.8238 7.40218C20.9686 7.49909 16.3392 9.47099 12.9053 12.9048C9.47147 16.3387 7.49957 20.9681 7.40267 25.8233C7.30577 30.6785 9.09138 35.3829 12.3855 38.951C15.6796 42.5192 20.2266 44.6742 25.0741 44.9648C29.9216 45.2553 34.6935 43.6588 38.3902 40.5097L53.9402 56.0597C54.2215 56.3406 54.6027 56.4984 55.0002 56.4984C55.3977 56.4984 55.779 56.3406 56.0602 56.0597C56.2005 55.9211 56.3119 55.7561 56.3879 55.5741C56.4639 55.3922 56.5031 55.1969 56.5031 54.9997C56.5031 54.8025 56.4639 54.6073 56.3879 54.4253C56.3119 54.2434 56.2005 54.0783 56.0602 53.9397V53.9397ZM10.5002 26.2497C10.5002 23.1347 11.4239 20.0896 13.1546 17.4995C14.8852 14.9094 17.345 12.8907 20.2229 11.6986C23.1009 10.5065 26.2677 10.1946 29.3229 10.8024C32.3781 11.4101 35.1845 12.9101 37.3871 15.1128C39.5898 17.3155 41.0899 20.1218 41.6976 23.177C42.3053 26.2322 41.9934 29.399 40.8013 32.277C39.6092 35.1549 37.5905 37.6147 35.0004 39.3454C32.4104 41.076 29.3653 41.9997 26.2502 41.9997C22.0747 41.9944 18.0717 40.3334 15.1191 37.3808C12.1666 34.4283 10.5055 30.4253 10.5002 26.2497V26.2497Z"
        fill="white"
      />
    </svg>
  ),
  hamburger: (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30px"
      height="40px"
      viewBox="0 0 64 64"
      strokeMiterlimit="new 0 0 64 64"
    >
      <line
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="12"
        y1="21"
        x2="52"
        y2="21"
      />
      <line
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="12"
        y1="33"
        x2="52"
        y2="33"
      />
      <line
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="12"
        y1="45"
        x2="52"
        y2="45"
      />
    </svg>
  ),
  facebook: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z"
        fill="white"
      />
    </svg>
  ),
  instagram: (
    <svg
      width="36"
      height="36"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      fill="white"
    >
      <g>
        <path
          d="M386.3978,99.0718c-16.0962,0-29.1467,13.0505-29.1467,29.1467c0,16.0976,13.0505,29.1467,29.1467,29.1467
     c16.0976,0,29.1467-13.0491,29.1467-29.1467C415.5445,112.1223,402.4954,99.0718,386.3978,99.0718z M256.8186,136.4493
     c-67.5108,0-122.4375,54.9253-122.4375,122.4361s54.9267,122.4361,122.4375,122.4361s122.4347-54.9253,122.4347-122.4361
     S324.3294,136.4493,256.8186,136.4493z M256.8186,337.3156c-43.2461,0-78.4303-35.1828-78.4303-78.4303
     c0-43.2461,35.1842-78.4275,78.4303-78.4275c43.2475,0,78.4275,35.1814,78.4275,78.4275
     C335.2461,302.1329,300.0661,337.3156,256.8186,337.3156z M503.8675,157.1272c0-82.4737-66.8618-149.3327-149.341-149.3327
     H157.4254c-82.4778,0-149.341,66.859-149.341,149.3327v197.119c0,82.4737,66.8632,149.3327,149.341,149.3327h197.1011
     c82.4792,0,149.341-66.859,149.341-149.3327V157.1272z M457.0955,354.2463c0,56.6425-45.921,102.5607-102.5691,102.5607H157.4254
     c-56.6467,0-102.569-45.9182-102.569-102.5607v-197.119c0-56.6425,45.9223-102.5607,102.569-102.5607h197.1011
     c56.6481,0,102.5691,45.9182,102.5691,102.5607V354.2463z"
        />
      </g>
    </svg>
  ),
  google: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.9654 17.6213C25.9154 17.6213 27.2309 18.4649 27.9809 19.1698L30.9118 16.304C29.1117 14.6284 26.7693 13.6 23.9654 13.6C19.9037 13.6 16.3959 15.9342 14.6881 19.3316C13.9842 20.7413 13.5804 22.3244 13.5804 24C13.5804 25.6756 13.9842 27.2587 14.6881 28.6684L18.0575 26.0569L14.6996 28.6684C16.4074 32.0658 19.9037 34.4 23.9654 34.4C26.7693 34.4 29.1232 33.4756 30.8425 31.8809C32.8041 30.0667 33.935 27.3973 33.935 24.2311C33.935 23.376 33.8657 22.752 33.7157 22.1049H23.9654V25.9644H29.6887C29.5733 26.9236 28.9502 28.368 27.5655 29.3387C26.6885 29.9511 25.5116 30.3787 23.9654 30.3787C21.2191 30.3787 18.8883 28.5644 18.0575 26.0569C17.8382 25.4098 17.7113 24.7164 17.7113 24C17.7113 23.2836 17.8382 22.5902 18.0459 21.9431C18.8883 19.4356 21.2191 17.6213 23.9654 17.6213Z"
        fill="white"
      />
    </svg>
  ),
  youtube: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM34.0016 15.7493C35.1031 16.0516 35.9706 16.9422 36.265 18.0732C36.8 20.123 36.8 24.4 36.8 24.4C36.8 24.4 36.8 28.6768 36.265 30.7268C35.9706 31.8578 35.1031 32.7484 34.0016 33.0508C32.0054 33.6 24 33.6 24 33.6C24 33.6 15.9946 33.6 13.9983 33.0508C12.8967 32.7484 12.0292 31.8578 11.7348 30.7268C11.2 28.6768 11.2 24.4 11.2 24.4C11.2 24.4 11.2 20.123 11.7348 18.0732C12.0292 16.9422 12.8967 16.0516 13.9983 15.7493C15.9946 15.2 24 15.2 24 15.2C24 15.2 32.0054 15.2 34.0016 15.7493Z"
        fill="white"
      />
      <path d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z" fill="black" />
    </svg>
  ),
  location: (
    <svg
      width="36"
      height="36"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      strokeMiterlimit="new 0 0 512 512"
      fill="white"
    >
      <path
        d="M240.3,396.8L240.3,396.8c3.3,5.1,9.1,8.5,15.7,8.5c6.6,0,12.4-3.4,15.8-8.5l110.2-170.2c14.8-22.9,23.4-48.1,23.4-77.3
	C405.3,64.9,339,0,256,0c-83,0-149.3,64.9-149.3,149.3c0,29.2,8.6,54.4,23.4,77.3L240.3,396.8z M256,64c47.1,0,85.3,38.2,85.3,85.3
	s-38.2,85.3-85.3,85.3s-85.3-38.2-85.3-85.3S208.9,64,256,64z M365.4,323.5L256,469.3L146.6,323.5c-37.4,19.6-61.3,48.9-61.3,81.8
	C85.3,464.2,161.7,512,256,512s170.7-47.8,170.7-106.7C426.7,372.4,402.8,343.1,365.4,323.5z"
      />
    </svg>
  ),
  cart: (
    <svg
      height={"24"}
      width="24"
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      fill="white"
    >
      <path
        d="M27,24H9.6C9.3,24,9,23.7,9,23.4c0-0.3,0.2-0.6,0.5-0.6L27.2,20c0.4-0.1,0.8-0.4,0.8-0.8l2-11c0.1-0.5-0.3-1.1-0.8-1.2
   c-0.5-0.1-1.1,0.3-1.2,0.8L27.8,9H8.6l0-0.1c0.6-1.3,0.6-2.8-0.2-4C7.7,3.7,6.4,3,5,3H3C2.4,3,2,3.4,2,4s0.4,1,1,1h2
   c0.7,0,1.4,0.4,1.8,1c0.4,0.6,0.4,1.4,0.1,2L6.1,9.6c0,0,0,0,0,0c0,0.1,0,0.1-0.1,0.2C6,9.8,6,9.9,6,10c0,0,0,0,0,0
   c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2l3.8,10.3l-0.6,0.1C7.9,21,7,22.1,7,23.4c0,1,0.5,1.8,1.3,2.3C8.1,26.1,8,26.5,8,27
   c0,1.7,1.3,3,3,3s3-1.3,3-3c0-0.4-0.1-0.7-0.2-1h7.4c-0.1,0.3-0.2,0.6-0.2,1c0,1.7,1.3,3,3,3s3-1.3,3-3c0-0.4-0.1-0.7-0.2-1H27
   c0.6,0,1-0.4,1-1S27.6,24,27,24z M12,27c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S12,26.4,12,27z M25,27c0,0.6-0.4,1-1,1s-1-0.4-1-1
   s0.4-1,1-1S25,26.4,25,27z"
      />
    </svg>
  ),
  checked: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      version="1.1"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          transform="translate(0 1029.4)"
          fill="#27ae60"
        />
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          transform="translate(0 1028.4)"
          fill="#276749"
        />
        <path
          d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="green.700"
        />
        <path
          d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="#ecf0f1"
        />
      </g>
    </svg>
  ),
  tick: (
    <svg
      height="20"
      width="20"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 80.588 61.158"
      fill="white"
    >
      <path
        d="M29.658,61.157c-1.238,0-2.427-0.491-3.305-1.369L1.37,34.808c-1.826-1.825-1.826-4.785,0-6.611
	c1.825-1.826,4.786-1.827,6.611,0l21.485,21.481L72.426,1.561c1.719-1.924,4.674-2.094,6.601-0.374
	c1.926,1.72,2.094,4.675,0.374,6.601L33.145,59.595c-0.856,0.959-2.07,1.523-3.355,1.56C29.746,61.156,29.702,61.157,29.658,61.157z
	"
      />
    </svg>
  ),
  next: (
    <svg
      width="7px"
      height="12px"
      viewBox="0 0 7 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-619.000000, -2862.000000)">
          <g id="Image" transform="translate(100.000000, 2626.000000)">
            <g
              id="-Round-/-Image-/-navigate_next"
              transform="translate(510.000000, 230.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M9.31,6.71 C8.92,7.1 8.92,7.73 9.31,8.12 L13.19,12 L9.31,15.88 C8.92,16.27 8.92,16.9 9.31,17.29 C9.7,17.68 10.33,17.68 10.72,17.29 L15.31,12.7 C15.7,12.31 15.7,11.68 15.31,11.29 L10.72,6.7 C10.34,6.32 9.7,6.32 9.31,6.71 Z"
                  id="🔹-Icon-Color"
                  fill="green"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  success: (
    <svg
      version="1.1"
      id="Layer_1"
      width="80px"
      height="80px"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 63 64.5"
      enableBackground="new 0 0 63 64.5"
    >
      <g>
        <path
          fill="white"
          d="M57.2,2.6c-1.5,0-3.3,0.2-5.6,0.5c-2.3,0.4-3.9,0.8-4.8,1.3c-1,0.5-2.4,1.8-4.4,3.9c-1.9,2-4.4,5.3-7.4,9.5
		c-3,4.3-5.6,8.4-7.8,12.4c-2,3.5-4,7.4-6,11.5c-1.4-1.8-2.9-3.2-4.4-4.3c-1.9-1.3-3.8-2-5.5-2c-1.7,0-3.7,0.8-5.7,2.3
		c-2.1,1.6-3.2,3.4-3.2,5.3c0,1.5,0.9,3.2,2.8,5.2c2.7,3,4.9,5.8,6.5,8.3c1.2,1.8,2,3,2.5,3.6c0.6,0.6,1.3,1.1,2.1,1.4
		c0.8,0.3,2.2,0.4,4.1,0.4c2.7,0,4.5-0.3,5.6-0.9c1.1-0.6,1.9-1.4,2.5-2.5c0.5-1,1.4-2.9,2.6-5.9c3-7.5,7.1-15.4,12.2-23.4
		c5.1-8,10-14.2,14.7-18.6c1.2-1,1.9-1.8,2.2-2.3C60.8,7.9,61,7.2,61,6.4c0-1-0.4-1.9-1.1-2.6C59.3,3,58.3,2.6,57.2,2.6z"
        />
      </g>
    </svg>
  ),
  error: (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>error_outline</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-170.000000, -730.000000)">
          <g id="Alert" transform="translate(100.000000, 674.000000)">
            <g
              id="-Round-/-Alert-/-error_outline"
              transform="translate(68.000000, 54.000000)"
            >
              <g>
                <rect
                  id="Rectangle-Copy-28"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                ></rect>
                <path
                  d="M12,7 C12.55,7 13,7.45 13,8 L13,12 C13,12.55 12.55,13 12,13 C11.45,13 11,12.55 11,12 L11,8 C11,7.45 11.45,7 12,7 Z M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 Z M12,20 C7.58,20 4,16.42 4,12 C4,7.58 7.58,4 12,4 C16.42,4 20,7.58 20,12 C20,16.42 16.42,20 12,20 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z"
                  id="🔹Icon-Color"
                  fill="#ff4d4d"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  back: (
    <svg
      height={"24px"}
      width={"24px"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
    </svg>
  ),
  cashPayment: (
    <svg
      height="120px"
      width="120px"
      viewBox="-18 -19 581.33331 581"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m488.21875.0820312h-256.128906c-31.34375.0351568-56.746094 25.4414068-56.78125 56.7851568v7.25l-120.644532 100.59375c-.289062.242187-.5625.496093-.828124.757812-10.457032 10.601562-16.304688 24.902344-16.265626 39.789062v220.5625h-26.320312c-6.210938 0-11.25 5.035157-11.25 11.25v94.484376c0 6.210937 5.039062 11.25 11.25 11.25h244.75c6.210938 0 11.25-5.039063 11.25-11.25v-94.484376c0-6.214843-5.039062-11.25-11.25-11.25h-18.351562v-24.148437c26.46875-5.390625 45.496093-28.652344 45.535156-55.664063v-91.0625h-22.5v91.066407c-.023438 18.925781-15.363282 34.261719-34.285156 34.285156-6.21875 0-11.25 5.035156-11.25 11.25v34.273437h-155.078126v-220.5625c-.027343-8.808593 3.367188-17.285156 9.457032-23.644531l105.777344-88.199219v80.140626l-69.929688 55.367187c-4.871094 3.855469-5.691406 10.933594-1.835938 15.800781 3.859376 4.871094 10.933594 5.691406 15.800782 1.835938l101.503906-80.371094.960938.960938c8.933593 8.949218 8.933593 23.4375 0 32.386718l-48.292969 48.296875c-1.953125 1.949219-3.117188 4.550781-3.277344 7.304688l-.609375 10.53125c-.015625.214843-.019531.429687-.019531.652343.046875 8.363282 1.953125 16.609376 5.574219 24.152344 7.433593 15.949219 6.035156 34.621094-3.6875 49.289063-1.226563 1.84375-1.886719 4.019531-1.886719 6.238281v22.765625c0 6.214844 5.039062 11.25 11.25 11.25 6.214843 0 11.25-5.035156 11.25-11.25v-19.511719c12.371093-20.8125 13.660156-46.390625 3.441406-68.339844-2.164063-4.464843-3.339844-9.335937-3.441406-14.292968l.347656-5.902344 12.710937-12.714844c8.273438 4.453125 17.523438 6.785156 26.914063 6.800782h256.128906c31.347657-.027344 56.757813-25.433594 56.792969-56.78125v-141.15625c-.035156-31.34375-25.4375-56.75-56.78125-56.7851568zm-243.46875 520.2265628h-222.25v-71.988282h222.25zm-12.660156-497.726563h256.121094c18.929687.019531 34.269531 15.359375 34.289062 34.285157v5.828124h-324.695312v-5.824218c.023437-18.925782 15.359374-34.269532 34.285156-34.289063zm-34.285156 62.613281h324.695312v23.03125h-324.695312zm290.414062 147.109376h-256.128906c-3.308594 0-6.605469-.484376-9.785156-1.429688l15.421874-15.429688c17.699219-17.746093 17.699219-46.464843 0-64.203124l-8.054687-8.054688c-4.039063-4.035156-10.457031-4.40625-14.9375-.863281l-16.929687 13.410156v-25.007813h324.695312v67.296876c-.023438 18.925781-15.355469 34.261718-34.28125 34.28125zm0 0" />
      <path d="m32.441406 485.453125c.3125 15.566406 13.128906 27.96875 28.699219 27.765625 15.574219-.207031 28.058594-12.945312 27.957031-28.515625-.105468-15.570313-12.761718-28.144531-28.332031-28.144531-15.789063.175781-28.460937 13.101562-28.324219 28.894531zm28.324219-6.394531c2.640625-.246094 5.164063 1.15625 6.34375 3.53125 1.1875 2.371094.785156 5.226562-1 7.1875-1.78125 1.960937-4.589844 2.621094-7.066406 1.664062-2.472657-.957031-4.101563-3.335937-4.101563-5.988281-.144531-3.367187 2.457032-6.222656 5.824219-6.394531zm0 0" />
      <path d="m445.527344 144.652344c-5.910156-.003906-11.742188 1.320312-17.074219 3.875-16.691406-7.976563-36.675781-3.371094-48.195313 11.101562-11.511718 14.472656-11.511718 34.980469 0 49.453125 11.519532 14.472657 31.503907 19.078125 48.195313 11.105469 14.726563 7.015625 32.242187 4.316406 44.167969-6.808594 11.925781-11.128906 15.832031-28.417968 9.855468-43.589844-5.984374-15.175781-20.636718-25.144531-36.949218-25.140624zm-51.355469 39.707031c-.011719-8.105469 5.632813-15.117187 13.546875-16.84375 7.921875-1.722656 15.96875 2.304687 19.332031 9.671875 3.371094 7.375 1.136719 16.09375-5.355469 20.949219-2.96875 2.238281-6.59375 3.445312-10.320312 3.4375-9.496094-.015625-17.195312-7.710938-17.203125-17.214844zm52.996094 17.136719c.128906-.253906.230469-.519532.347656-.773438.144531-.320312.292969-.644531.429687-.964844.15625-.378906.300782-.753906.445313-1.128906.125-.324218.246094-.644531.375-.972656.136719-.378906.261719-.777344.382813-1.160156.109374-.328125.21875-.644532.3125-.972656.128906-.40625.222656-.8125.335937-1.222657.078125-.316406.167969-.632812.246094-.949219.097656-.425781.183593-.855468.265625-1.28125.0625-.3125.136718-.625.191406-.933593.078125-.449219.132812-.90625.199219-1.355469.042969-.296875.089843-.585938.125-.878906.058593-.5.09375-1.007813.136719-1.507813.019531-.25.050781-.503906.0625-.753906.046874-.757813.070312-1.511719.070312-2.273437 0-.769532-.023438-1.523438-.070312-2.28125-.011719-.257813-.046876-.519532-.066407-.773438-.039062-.5-.074219-1-.132812-1.488281-.035157-.3125-.085938-.613281-.125-.925781-.058594-.4375-.121094-.875-.195313-1.308594-.054687-.332032-.132812-.660156-.195312-.988282-.082032-.410156-.160156-.816406-.25-1.21875-.082032-.34375-.175782-.675781-.261719-1.011718-.105469-.390625-.203125-.78125-.3125-1.167969-.105469-.335937-.222656-.671875-.328125-1.011719-.125-.375-.242188-.746094-.371094-1.121094-.128906-.335937-.253906-.667968-.386718-1-.140626-.367187-.28125-.730468-.433594-1.089843-.136719-.332031-.289063-.660157-.441406-.988281-.109376-.246094-.214844-.507813-.335938-.753907 8.824219.847657 15.5625 8.265625 15.5625 17.128907 0 8.867187-6.738281 16.277343-15.5625 17.132812zm0 0" />
    </svg>
  ),
  phonePay: (
    <svg
      height="120px"
      width="120px"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Mobile Payment</title>
      <circle cx="256" cy="469.333" r="10.667" />
      <path d="M426.667,170.667H405.333V53.333A53.394,53.394,0,0,0,352,0H160a53.394,53.394,0,0,0-53.333,53.333V458.667A53.4,53.4,0,0,0,160,512H352a53.4,53.4,0,0,0,53.333-53.333V352h21.333a32.035,32.035,0,0,0,32-32V202.667A32.035,32.035,0,0,0,426.667,170.667Zm0,21.333a10.679,10.679,0,0,1,10.667,10.667v10.667H224V202.667A10.679,10.679,0,0,1,234.667,192ZM160,21.333H352a32.035,32.035,0,0,1,32,32H128A32.035,32.035,0,0,1,160,21.333ZM384,458.667a32.035,32.035,0,0,1-32,32H160a32.035,32.035,0,0,1-32-32V448H384Zm0-32H128v-352H384v96H234.667a32.035,32.035,0,0,0-32,32V320a32.035,32.035,0,0,0,32,32H384ZM437.333,320a10.681,10.681,0,0,1-10.667,10.667h-192A10.681,10.681,0,0,1,224,320V234.667H437.333Z" />
      <path d="M256,309.333h32A10.667,10.667,0,1,0,288,288H256a10.667,10.667,0,1,0,0,21.333Z" />
    </svg>
  ),
  cash: (
    <svg
      height="120px"
      width="120px"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Cash</title>
      <path d="M480,172.534V160a32.025,32.025,0,0,0-21.333-30.133V117.333a32.035,32.035,0,0,0-32-32H85.333a32.035,32.035,0,0,0-32,32v12.534A32.025,32.025,0,0,0,32,160v12.534a32.025,32.025,0,0,0-21.333,30.133v192a32.035,32.035,0,0,0,32,32H469.333a32.035,32.035,0,0,0,32-32v-192A32.025,32.025,0,0,0,480,172.534ZM85.333,106.667H426.667a10.679,10.679,0,0,1,10.667,10.667V128H74.667V117.333A10.679,10.679,0,0,1,85.333,106.667ZM64,149.333H448A10.679,10.679,0,0,1,458.667,160v10.667H53.333V160A10.679,10.679,0,0,1,64,149.333ZM480,394.667a10.681,10.681,0,0,1-10.667,10.667H42.667A10.681,10.681,0,0,1,32,394.667v-192A10.679,10.679,0,0,1,42.667,192H469.333A10.679,10.679,0,0,1,480,202.667Z" />
      <path d="M263.536,289.927c-1.182-.453-2.281-.865-3.229-1.286-1.1-.484-2.427-.995-3.891-1.552-7.021-2.661-11.083-4.75-11.083-7.51,0-.786,1.271-2.9,4.333-4.453,2.281-1.146,10.557-4.3,21.349,3.635a10.666,10.666,0,0,0,12.635-17.187,48.824,48.824,0,0,0-16.984-8.137v-8.1a10.667,10.667,0,0,0-21.333,0v8.591a36.519,36.519,0,0,0-5.3,2.167c-9.891,5.005-16.036,14-16.036,23.487,0,18.021,16.781,24.4,24.844,27.458,1.068.4,2.042.766,2.854,1.125,1.245.547,2.682,1.1,4.224,1.693,8.234,3.146,10.745,4.87,10.745,7.37,0,.786-1.271,2.9-4.339,4.448-2.281,1.161-10.557,4.3-21.344-3.63a10.666,10.666,0,0,0-12.635,17.188,48.566,48.566,0,0,0,16.984,8.025V352a10.667,10.667,0,0,0,21.333,0v-9.172a36.293,36.293,0,0,0,5.292-2.119C281.854,335.7,288,326.7,288,317.224,288,299.271,271.474,292.958,263.536,289.927Z" />
      <path d="M256,202.667a96,96,0,1,0,96,96A96.11,96.11,0,0,0,256,202.667Zm0,170.667a74.667,74.667,0,1,1,74.667-74.667A74.751,74.751,0,0,1,256,373.333Z" />
      <path d="M149.333,362.667H105.318a42.828,42.828,0,0,0-30.651-30.651v-66.7a42.833,42.833,0,0,0,30.651-30.651h44.016a10.667,10.667,0,0,0,0-21.333H96A10.667,10.667,0,0,0,85.333,224,21.356,21.356,0,0,1,64,245.333,10.667,10.667,0,0,0,53.333,256v85.333A10.667,10.667,0,0,0,64,352a21.354,21.354,0,0,1,21.333,21.333A10.667,10.667,0,0,0,96,384h53.333a10.667,10.667,0,1,0,0-21.333Z" />
      <path d="M448,245.333A21.356,21.356,0,0,1,426.667,224,10.667,10.667,0,0,0,416,213.333H362.667a10.667,10.667,0,1,0,0,21.333h44.016a42.833,42.833,0,0,0,30.651,30.651v66.7a42.828,42.828,0,0,0-30.651,30.651H362.667a10.667,10.667,0,1,0,0,21.333H416a10.667,10.667,0,0,0,10.667-10.667A21.354,21.354,0,0,1,448,352a10.667,10.667,0,0,0,10.667-10.667V256A10.667,10.667,0,0,0,448,245.333Z" />
    </svg>
  ),
};

interface icons {
  editIcon: JSX.Element;
  deleteIcon: JSX.Element;
  duplicateIcon: JSX.Element;
  filterPeriod: JSX.Element;
  lock: JSX.Element;
  leaf: JSX.Element;
}

const getIcon = (name: keyof typeof icons) => icons[name];
export { getIcon };
