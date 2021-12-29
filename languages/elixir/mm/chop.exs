defmodule Chop do
  def guess(target, a..b) do
    mid = div(b + a, 2)
    IO.puts("It is #{mid}")
    next(target, mid, a..b)
  end

  defp next(target, mid, a..b) when target === mid do
    IO.puts(mid)
  end

  defp next(target, mid, a..b) when target > mid do
    guess(target, mid..b)
  end

  defp next(target, mid, a..b) when target < mid do
    guess(target, a..mid)
  end
end
