defmodule Times do
  def double(n), do: n * 2

  def quadruple(n) do
    Times.double(Times.double(n))
  end
end
