import type { NextPage } from "next";
import Head from "next/head";
import { TicketCard } from "../../../src/components/TicketCard";
import { useFindAllTicketsQuery } from "../../../src/generated/graphql";

const Tickets: NextPage = () => {
  const { data, loading, error } = useFindAllTicketsQuery();
  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>

      {data
        ? data.findAllTickets.map((ticket) => {
            return (
              <TicketCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                message={ticket.message}
                active={ticket.active}
              />
            );
          })
        : ""}
    </>
  );
};

export default Tickets;
