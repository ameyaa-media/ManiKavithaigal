import Container from "../ui/Container";
import PrintRequestForm from "../forms/PrintRequestForm";

export default function PrintOnRequest() {
  return (
    <section
      id="print-request"
      className="py-16 md:py-24 bg-white dark:bg-neutral-900 relative transition-colors duration-300"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold">
                Get a Physical Copy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Request a Print Version
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Love reading physical books? Submit a request for a printed copy
              of any of my works. I'll handle the printing and shipping tailored
              just for you.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 p-6 md:p-10 transition-colors duration-300">
            <PrintRequestForm bookTitle="" />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-neutral-500">
            <p>
              Note: Printing and shipping costs will be calculated based on your
              location and requested quantity. We will contact you with the
              final quote before processing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
