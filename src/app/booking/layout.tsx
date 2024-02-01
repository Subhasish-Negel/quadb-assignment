import BookingForm from "@/components/BookingForm/BookingForm";
export default function BookingLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {BookingForm}
      
      {modal}
    </>
  );
}
