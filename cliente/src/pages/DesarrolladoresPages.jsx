import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function DesarrolladoresPages() {
  return (
    <div className="grid content-center md:flex items-center justify-center m-10 gap-10">
      <h1 className="font-bold text-8xl text-verdeOriginal m-10">Devs 🖥️</h1>
      <Card className="w-96 shadow-2xl m-5">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHeIwTeIrMXeQ/profile-displayphoto-shrink_800_800/0/1706647841333?e=1726099200&v=beta&t=kp629iBqEcP8q8z4hpGvM1bWdUjx_3-sBdGkyniJK-g"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Carlos Agüero
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            TNS Informática m/ Ciberseguridad
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Viña del Mar
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <a href="https://github.com/CarlosAGM" target="_blank">
            <ion-icon
              name="logo-github"
              size="large"
              class="text-black"
            ></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-agüero-marquizani-620618243"
            target="_blank"
          >
            <ion-icon
              name="logo-linkedin"
              size="large"
              class="text-blue-900"
            ></ion-icon>
          </a>
        </CardFooter>
      </Card>
      <Card className="w-96 shadow-2xl m-5">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://avatars.githubusercontent.com/u/55396280?v=4"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Maximiliano Valdebenito
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            TNS Informática m/ Ciberseguridad
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Viña del Mar
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <a href="https://github.com/Zycky" target="_blank">
            <ion-icon
              name="logo-github"
              size="large"
              class="text-black"
            ></ion-icon>
          </a>
          <a
            href=" https://www.linkedin.com/in/maximiliano-valdebenito-6b1491293/"
            target="_blank"
          >
            <ion-icon
              name="logo-linkedin"
              size="large"
              class="text-blue-900"
            ></ion-icon>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DesarrolladoresPages;
