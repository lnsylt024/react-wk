interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

function Index() {
  return (
    <div>
      <h1>Welcom to my tsx!</h1>
      <MyButton title={"My button"} disabled={true} />
    </div>
  );
}
export default Index;
