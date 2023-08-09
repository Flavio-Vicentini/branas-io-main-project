drop table if exists public.board, public.column, public.card;


create table public.board(
    id_board serial primary key,
    name text
);

create table public.column (
    id_column serial primary key,
    id_board integer references public.board (id_board),
    name text,
    has_estimative boolean
);

create table public.card(
    id_card serial primary key,
    id_column integer references public.column (id_column),
    title text,
    estimative integer
);

insert into public.board(id_board, name) values (1,'Projeto 1');
insert into public.column(id_column, id_board, name, has_estimative) values (1, 1,'Coluna A', true);
insert into public.column(id_column, id_board, name, has_estimative) values (2, 1,'Coluna B', true);
insert into public.column(id_column, id_board, name, has_estimative) values (3, 1,'Coluna C', true);
insert into public.card(id_card,id_column,title,estimative) values (1,1,'Atividade 1', 3);
insert into public.card(id_card,id_column,title,estimative) values (2,1,'Atividade 2', 2);
insert into public.card(id_card,id_column,title,estimative) values (3,1,'Atividade 3', 1);