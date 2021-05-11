<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>MemeMiner Description</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
		<div id="title">
			<B>Thought Precedes Action</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
		</div>

			<p><b>Memegraph:</b>&nbsp;&nbsp;a histogram of keywords appearing on internet sites which correspond to a belief, technology, product or company.</p>

			<p>If a product or technology is useful, people write about it.<br>
			Then their friends write about it.<br>
			Soon, a trend appears that can be captured in a time-series graph.<br><br>

			Memegraphs can identify areas of rapid growth for job and investment opportunities.<br>

			Memegraphs can also identify areas to avoid.</p>


			<p>The goal is to identify an opportunity after its risky startup period, but before its rate of growth slows.<br>

			<p><a href="<%= cPath %>/miner/historical.jsp?startup=<%= cPath %>/miner/technology/delphiDejanews.png">The Graphs</a></p>

			<p><b>I have used keyword frequency analysis against newsgroups, Dice.com, Monster.com and search engines.
			<br/>It's been an <a href="<%= cPath %>/miner/historical.jsp?startup=<%= cPath %>/miner/investment/palladiumDejanews.png">effective tool</a> for me since 1993, particularly with dejanews.com.</b></p>
			<img src="scurve.gif" />

</div>
</BODY>
</HTML>
