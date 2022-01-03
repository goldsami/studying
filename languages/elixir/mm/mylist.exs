defmodule MyList do
  def len([]), do: 0
  def len([_head | tail]), do: 1 + len(tail)

  def map([], _func), do: []
  def map([head | tail], func), do: [func.(head) | map(tail, func)]

  def reduce([], value, _) do
    value
  end

  def reduce([head | tail], value, func) do
    reduce(tail, func.(head, value), func)
  end

  def sum(list), do: _sum(list, 0)
  defp _sum([], total), do: total
  defp _sum([head | tail], total), do: _sum(tail, head + total)

  def mapsum(list, func) do
    map(list, func)
    |> reduce(0, &(&1 + &2))
  end

  defp check_max(a, b) when a > b, do: a
  defp check_max(a, b) when a <= b, do: b

  def max([head | tail]) do
    reduce(tail, head, &check_max/2)
  end

  def span(from, to) when is_number(from) and is_number(to) and from > to, do: []

  def span(from, to) when is_number(from) and is_number(to) and from <= to,
    do: [from | span(from + 1, to)]

  # ceasar cipher
  # ?a == 97, ?z == 122
  defp _caesar_add(ch, n) when ch in ?a..?z do
    rem(ch - ?a + n, 26) + ?a
  end

  defp _caesar_add(ch, n) when ch in ?A..?Z do
    rem(ch - ?A + n, 26) + ?A
  end

  def caesar([], _), do: ''

  def caesar([head | tail], number_to_add) do
    [_caesar_add(head, number_to_add) | caesar(tail, number_to_add)]
  end
end
